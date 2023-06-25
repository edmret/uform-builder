import { UFFiled, UFForm, UFRow, UFSection } from "../types";
import { DEFAULT_ROW_GRID_SIZE } from "../constants";


export const processFields = (row: UFRow, rowSize: number = DEFAULT_ROW_GRID_SIZE) => {
    const fields  = JSON.parse(JSON.stringify(row.fields)) as UFFiled [];
    // gets the total of cols used and the total of cols without size based of the size of the row
    const [totalColsUsed, missingFieldIndexes] = fields.reduce<[number, number []]>(([totalColsUsed, missingFieldIndexes], field, index) => {

        const indexes = [...missingFieldIndexes];
        const hasSize = field.colSize !== undefined;
        if(!hasSize) {
            indexes.push(index);
        }

        const used = totalColsUsed + (field.colSize ?? 0);
        return [used, indexes];
    }, [0, []]);

    // gets the total of cols available based on the size of the row
    const availableCols = rowSize - totalColsUsed;
    // divide the cols available between the cols without size
    const colSize = Math.floor(availableCols / missingFieldIndexes.length);

    // last field will get the rest of the cols available
    const lastFieldIndex = availableCols - colSize * missingFieldIndexes.length;

    
    // use while pop to add corect size to fields
    while(missingFieldIndexes.length > 0) {
        const index = missingFieldIndexes.pop()!;
        const isLast = missingFieldIndexes.length === 0;
        fields[index].colSize = isLast ? colSize + lastFieldIndex : colSize;
    }
    return fields;
};

export const processRow = (row: UFRow) => {
    const fields = processFields(row);
    // fieldKeys is an array of strings
    const keys = fields.map(field => field.label?.toLocaleLowerCase() ??  field.id);
    return {
        ...row,
        fields,
        keywords: [
            ...row.keywords ?? [],
            ...keys,
        ],
    };
};

export const processSection = (section: UFSection) => {
    const { rows } = section;
    const processedRows = rows.map(processRow);
    const keys = processedRows.map(row => row.keywords).flat();

    return {
        ...section,
        rows: processedRows,
        keywords: [
            section.title?.toLocaleLowerCase() ?? section.id,
            ...section.keywords ?? [],
            ...keys,
        ],
    };
}

export const processForm = (form: UFForm) => {
    const { sections } = form;
    const processedSections = sections.map(processSection);
    const keys = processedSections.map(section => section.keywords).flat();

    return {
        ...form,
        sections: processedSections,
        keywords: [
            form.title?.toLocaleLowerCase() ?? form.id,
            ...form.keywords ?? [],
            ...keys,
        ],
    };
}
    