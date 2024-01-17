import { signal } from "@preact/signals";

// Create a signal that can be subscribed to:
const count = signal(0);
const count2 = signal(0);

function Count() {
  console.log("render");

  const increment = () => {
    // A signal is updated by assigning to the `.value` property:
    count2.value++;
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => count.value++}>increment count</button>
      <br />
      <p>Count2: {count2}</p>
      <button onClick={() => count2.value++}>increment count2</button>
    </div>
  );
}

export default Count;
