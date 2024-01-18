import { signal, computed } from "@preact/signals";

// 定义 signal
const count = signal(0);
// 派生 signal
const comput = computed(() => count.value * 5);
// 修改 signal
const increment = () => {
  count.value++;
};

const user = signal({ a: { b: 1 }, name: "test" });
const comput2 = computed(() => user.value.a.b + 1);

const increment2 = () => {
  user.value.a.b++;
  user.value = { ...user.value };
};

export default function Home() {
  return (
    <div className="App">
      <h1>Count -> {count}</h1>
      <h1>Commp -> {comput}</h1>
      <button onClick={increment}>Increment</button>
      <br />
      <h3>复杂结构响应式失效</h3>
      <h1> user.value.a.b -> {user.value.a.b}</h1>
      <button onClick={increment2}>Increment2</button>
    </div>
  );
}
