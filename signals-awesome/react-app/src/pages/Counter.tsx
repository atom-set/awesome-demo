import React, { useState } from "react";

function Display(props: any) {
  console.log(`${props.title} <Display count=${props.count} />`);
  return <div>{props.title}: {props.count}</div>
}

function Counter() {
  console.log('<CounterV2 />');
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <div>
      <div><button onClick={() => setCountA(countA + 1)}>A</button></div>
      <div><button onClick={() => setCountB(countB + 1)}>B</button></div>
      <div><Display count={countA} title="A" key={countA} /></div>
      <div><Display count={countB} title="B" key={countB} /></div>
    </div>
  )

}
export default Counter;