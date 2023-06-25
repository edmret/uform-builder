import { UFForm } from "./Form.types";

/**
 * is the id type of the form to identify as unique and be able to use it as a key
 */
export type UFormId = `uform-${string}`;

/**
 * is the resolver that will validate the flow to finde wich is the next step to the form
 */
export type UFResolver = (data: any, additionalData?: any) => Promise<UFForm> | UFormId;

/**
 * is the flow that will be executed when the form is submitted or the next button is pressed
 */
export interface UFormFlow{
    additionalDataKeys?: string [];
    nextStep: UFResolver;
}