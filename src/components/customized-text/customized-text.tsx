import type {Signal} from "@builder.io/qwik";
import {component$, useContext} from "@builder.io/qwik";
import type {CustomizedTextStateV2} from "~/context/customized-text";
import {CustomizedTextContextAdvanced} from "~/context/customized-text";

export const CustomizedText = component$(() => {

    // const {color, text, size} = useContext(CustomizedTextContextId);
    const props: Signal<CustomizedTextStateV2> = useContext(CustomizedTextContextAdvanced);

    return <>
        <div>
            <h1 style={'color:' + props.value.color + ';font-size:' + props.value.size + 'rem'}>{props.value.text}</h1>
        </div>
    </>
});