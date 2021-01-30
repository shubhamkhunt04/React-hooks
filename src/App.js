import "./App.css";
import UseEffect1 from "./Component/UseEffectHook/UseEffect1";
import UseState1 from "./Component/UseStateVersion/UseState1";
import UseState2 from "./Component/UseStateVersion/UseState2";
import UseState3 from "./Component/UseStateVersion/UseState3";
import CmpA from "./Component/UseContextHook/CmpA";
import Main from "./Component/UseCallbackHook/Main";
import UseMemoCmp from "./Component/UseMemoHook/UseMemoCmp";

function App() {
  return (
    <div className="App">
      <h1>Hello UseState Hook</h1>
      <UseState1></UseState1>
      <hr />
      <UseState2 />
      <hr />
      <UseState3 />
      <hr />
      <h1>Hello UseEffect Hook</h1>
      <UseEffect1 />
      <hr />
      <h1>Hello UseContext Hook</h1>
      <CmpA />
      <hr />
      <h1>Hello UseCallback Hook</h1>
      <Main />
      <hr />
      <h1>Hello UseMemo Hook</h1>
      <UseMemoCmp />
    </div>
  );
}

export default App;
