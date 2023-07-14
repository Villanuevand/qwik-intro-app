import type {ContextId, Signal} from "@builder.io/qwik";
import {createContextId} from "@builder.io/qwik";

export const beerContextId: ContextId<Signal<boolean>> = createContextId('beerContext');