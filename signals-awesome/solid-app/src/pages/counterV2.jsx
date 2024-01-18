import { createSignal, onCleanup, createEffect } from "solid-js";

function Display(props) {
  console.log(`${props.title} <Display count=${props.count} />`);
  return <div>{props.title}: {props.count}</div>
}

function CounterV2() {
  console.log('<CounterV2 />');
  const [countA, setCountA] = createSignal(0);
  const [countB, setCountB] = createSignal(0);


  return (
    <div>
      <div><button onClick={() => setCountA(countA() + 1)}>A</button></div>
      <div><button onClick={() => setCountB(countB() + 1)}>B</button></div>
      <div><Display count={countA()} title="A" /></div>
      <div><Display count={countB()} title="B" /></div>
    </div>
  );
}




export default CounterV2;
