import { Router } from "preact-router";
import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Count from "../routes/count";
import TODO_SIGNAL from "../routes/todoSignal";
import TODO_STATUS from "../routes/todoStatus";
import MALL from "../routes/mall";


const App = () => (
  <div id="app">
    <Header />
    <main>
      <Router>
        <Home path="/" />
        <Count path="/count" />
        <TODO_SIGNAL path="/todo/signal" />
        <TODO_STATUS path="/todo/status" />
        <MALL path="/mall" />
      </Router>
    </main>
  </div>
);

export default App;
