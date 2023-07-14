import type {Signal} from '@builder.io/qwik';
import {component$, useContextProvider, useSignal, useTask$} from '@builder.io/qwik';
import type {CustomizedTextState, CustomizedTextStateV2} from "~/context/customized-text";
import {CustomizedTextContextAdvanced, CustomizedTextContextId} from "~/context/customized-text";
import {CustomizedText} from "~/components/customized-text/customized-text";

export default component$(() => {

  // For Context Advanced example.
  const customizedTextSignal: CustomizedTextState = {
    text: useSignal(''),
    color: useSignal('black'),
    size: useSignal('1em'),
  }

  /*  useTask$(async ({track})=> {
      track(() => customizedTextSignal);
      console.log({
        text: customizedTextSignal.text.value,
        color: customizedTextSignal.color.value,
        size: customizedTextSignal.size.value,
      });
    });*/


  const richTextSignal: Signal<CustomizedTextStateV2> = useSignal({
    text: 'Hello World',
    color: 'red',
    size: '1em',
  });

  useTask$(({track}) => {
    track(() => richTextSignal);
    console.log({
      text: richTextSignal.value.text,
      color: richTextSignal.value.color,
      size: richTextSignal.value.size,
    });
  });

  // For Context Advanced example.
  useContextProvider(CustomizedTextContextId, customizedTextSignal);
  // For Signal type object example.
  useContextProvider(CustomizedTextContextAdvanced, richTextSignal);

  return <div>
    <h1>USe Context with Advanced Object</h1>
    <label>
      Text to show: &nbsp;
      <input id="Text" type="text" onInput$={(event) => {
        //customizedTextSignal.text.value = (event.target as HTMLInputElement).value;
        richTextSignal.value.text = (event.target as HTMLInputElement).value;
      }}/>
      <br/>
      <small style={'color: gray'}>Just a simple text</small>
      <br/>
    </label>
    <br/>
    <label>
      Color: &nbsp;
      <input id="Color" type="text" onInput$={(event) => {
        //customizedTextSignal.color.value = (event.target as HTMLInputElement).value;
        richTextSignal.value.color = (event.target as HTMLInputElement).value;
      }}/>
      <br/>
      <small style={'color: gray'}>Primary or Hexadecimal</small>
      <br/>
    </label>
    <br/>
    <label>
      Size: &nbsp;
      <input id="Size" type="text" onInput$={(event) => {
        //customizedTextSignal.size.value = (event.target as HTMLInputElement).value;
        richTextSignal.value.size = (event.target as HTMLInputElement).value;
      }}/>
      <br/>
      <small style={'color: gray'}>Measure scale: Rem</small>
      <br/>
    </label>

    <hr/>
    <h3>Result</h3>
    <CustomizedText/>
  </div>
});