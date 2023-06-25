import { UFFiled } from "./Field.types";
import { UFResolver, UFormFlow, UFormId } from "./FormResolver.types";

/**
 * is a Row of fields that will render in the same line
 */
export interface UFRow {
    /**
     * is the id of the row to identify as unique
     */
    id: string;
    /**
     * is the list of fields that will be rendered on the row
     */
    fields: UFFiled[];
    /**
     * list of keywords to be used to find the section row in case wanted to be filtered
     */
    keywords?: string[];
}

/**
 * is a specific section of the form that containes rows of fields, could be an independent fieldset
 */
export interface UFSection {
    /**
     * is the id of the section to identify as unique
     */
    id: string;
    /**
     * is the title of the section
     */
    title?: string;
    /**
     * is the list of rows that will be rendered on the section
     */
    rows: UFRow[];
    /**
     * list of keywords to be used to find the section in case wanted to be filtered
     */
    keywords?: string[];
}

/**
 * is the form that will be rendered on the screen
 */
export interface UFForm {
    /**
     * is the id of the form to identify as unique
     */
    id: UFormId;
    /**
     * is the title of the form
     */
    title?: string;
    /**
     * is the list of sections that will be rendered on the form
     */
    sections: UFSection[];
    /**
     * is the resolver that will be executed when the form is submitted or the next button is pressed
     */
    nextForm?: UFormFlow;
    /**
     * is the resolver that will be executed when the form is canceled or the back button is pressed
     */
    prevForm?: UFResolver;
    /**
     * list of keywords to be used to find the form in case wanted to be filtered
     */
    keywords?: string[];
}