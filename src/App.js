import "./App.css";
import UseEffect1 from "./Component/UseEffectHook/UseEffect1";
import UseState1 from "./Component/UseStateVersion/UseState1";
import UseState2 from "./Component/UseStateVersion/UseState2";
import UseState3 from "./Component/UseStateVersion/UseState3";
import CmpA from "./Component/UseContextHook/CmpA";

function App() {
  return (
    <div className="App">
      <h1>Hello UseState Hooks</h1>
      <UseState1></UseState1>
      <hr />
      <UseState2 />
      <hr />
      <UseState3 />
      <hr />
      <h1>Hello UseEffect Hooks</h1>
      <UseEffect1 />
      <hr />
      <h1>Hello UseContext Hooks</h1>
      <CmpA />
    </div>
  );
}

export default App;
