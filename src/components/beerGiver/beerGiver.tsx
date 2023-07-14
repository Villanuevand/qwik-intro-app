import {component$, useContext} from "@builder.io/qwik";
import {beerContextId} from "~/context/beer-context-id";

export const BeerGiver = component$(() => {
    const beerSignal = useContext(beerContextId);
    return <div>
        {beerSignal.value ? <h1>Tu cerveza 🍺</h1> : null}
    </div>
});