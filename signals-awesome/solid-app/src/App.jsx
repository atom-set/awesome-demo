import { createSignal, onCleanup, createEffect, Switch, Match } from "solid-js";
// import logo from './logo.svg';
import styles from './App.module.css';
import Counter from "./pages/counter";
import CounterV2 from "./pages/counterV2";
import Mall from "./pages/mall";
console.log(window.location.pathname)

function App() {
  return (
    <div class={styles.App}>
      <Switch fallback={<div>Not Found</div>}>
        <Match when={window.location.pathname === "/counter"}>
          <Counter />
        </Match>
        <Match when={window.location.pathname === "/counter/v2"}>
          <CounterV2 />
        </Match>
        <Match when={window.location.pathname === "/mall"}>
          <Mall />
        </Match>


      </Switch>
    </div>
  );
}

export default App;
