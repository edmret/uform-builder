import { processFields } from "../formProcessor.utils";

import coreInfo from '../../../../samples/registerSchoolForm/CoreInfoSection';

describe("Form Processor test for Fields", () => {
    it("Processig fields should give the same size of 6 for 6 fields", () => {
        const [field1, field2] = processFields(coreInfo.rows[0]);
        
        expect(field1.colSize).toBe(6);
        expect(field2.colSize).toBe(6);
    });
});