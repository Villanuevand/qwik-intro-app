import { component$, createContextId, Signal, useContext, useContextProvider, useSignal } from "@builder.io/qwik";
import { Projector } from "~/components/projector/projector";


export default component$(() => {
  const letterSignal = useSignal('');

  return <div>
    This is Page 1

    <hr />
    
    <input type="text" onInput$={(event)=> {
      letterSignal.value = (event.target as HTMLInputElement).value
      console.log(letterSignal.value);
    }
    } placeholder="Type your search"/>
    
    <hr />
    <Projector message={letterSignal.value}></Projector>
  </div>
});
