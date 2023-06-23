import { strEnum } from "../utils";

export const UFFiledType = strEnum([
    'select',
    'text',
    'number',
    'date',
    'checkbox',
    'radio',
    'textarea',
    'file',
    'image',
    'password',
    'email',
    'url',
    'color',
    'range',
    'hidden',
    'search',
    'tel',
    'time',
    'week',
    'month',
]);

export type UFFiledType = keyof typeof UFFiledType;

export interface UFFiled {
    name: string;
    type: UFFiledType;
    required: boolean;
    size?: number;
}
