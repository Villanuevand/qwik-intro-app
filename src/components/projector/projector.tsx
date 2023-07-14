import {component$, Slot} from "@builder.io/qwik";

interface ProjectorProps {
  message: string;
  color: string;
}

export const Projector = component$((props: ProjectorProps)=> {
  return <div>
    <Slot/> <span style={'color:' + props.color}>{props.message}</span>
    <br/>

  </div>
})