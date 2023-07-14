import type {Signal} from "@builder.io/qwik";
import {createContextId} from "@builder.io/qwik";

export interface CustomizedTextState {
    text: Signal<string>
    color: Signal<string>;
    size: Signal<string>;
}

export interface CustomizedTextStateV2 {
    text: string;
    color: string;
    size: string;
}

export const CustomizedTextContextId = createContextId<CustomizedTextState>('customizedTextContext');
export const CustomizedTextContextAdvanced = createContextId<Signal<CustomizedTextStateV2>>('customizedTextContextAdvanced');