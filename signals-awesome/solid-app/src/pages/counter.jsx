import { createSignal, onCleanup, createEffect } from "solid-js";

function MyComponent(props) {
  return <div>Hello {props.name}</div>;
}

// https://www.solidjs.com/guides/reactivity
function AutoIncreaseComponent() {
  const [count, setCount] = createSignal(0);
  const [count2, setCount2] = createSignal(0);
  createEffect(() => console.log("The latest count is", count()));
  createEffect(() => console.log("The latest count2 is", count2()));

  const timer = setInterval(() => setCount(count() + 1), 1000);
  const timer2 = setInterval(() => setCount2(count2() + 1), 5000);


  onCleanup(() => clearInterval(timer));
  onCleanup(() => clearInterval(timer2));

  return <div>自动递增计数器: {count()}</div>;
}


function Counter() {
  return (
    <div>
      <MyComponent name="Solid" />
      <AutoIncreaseComponent />
    </div>
  );
}

export default Counter;
