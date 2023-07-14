import type {Signal} from "@builder.io/qwik";
import {component$, useContextProvider, useSignal, useTask$} from "@builder.io/qwik";
import {Projector} from "~/components/projector/projector";
import {BeerGiver} from "~/components/beerGiver/beerGiver";
import {beerContextId} from "~/context/beer-context-id";


export default component$(() => {
  // const letterSignal = useSignal('');
  const messageSignal: Signal<string> = useSignal('');
  const colorSignal: Signal<string> = useSignal('black');
  const showBeerSignal: Signal<boolean> = useSignal(false);

  // Injecting the context, will be available heere and in child components
  // @ts-ignore
  useContextProvider(beerContextId, showBeerSignal);


  useTask$(async ({track}) => {
    track(() => messageSignal.value);
    if (messageSignal.value.indexOf('llama') !== -1) {
      colorSignal.value = 'red';
    }
  });
  useTask$(async ({track}) => {
    track(() => showBeerSignal.value);
  });

  return <div>
    This is Page 1

    <hr/>

    <input type="text" onInput$={(event) => {
      messageSignal.value = (event.target as HTMLInputElement).value
      console.log(messageSignal.value);
    }
    } placeholder="Type your search"/>

    <hr/>

    <Projector message={messageSignal.value} color={colorSignal.value}>
      <h1>Your message is:</h1>
    </Projector>
    <hr/>
    <br/>


    <button onClick$={() => {
      showBeerSignal.value = !showBeerSignal.value;
    }}>{showBeerSignal.value ? 'No quiero más cerveza' : 'Quieres una cerveza?'}</button>
    <BeerGiver/>

  </div>
});
