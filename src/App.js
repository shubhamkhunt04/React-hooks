import "./App.css";
import UseState1 from "./Component/UseStateVersion/UseState1";
import UseState2 from "./Component/UseStateVersion/UseState2";
import UseState3 from "./Component/UseStateVersion/UseState3";

function App() {
  return (
    <div className="App">
      <h1>Hello Hooks</h1>
      <UseState1></UseState1>
      <hr />
      <UseState2 />
      <hr />
      <UseState3 />
      <hr />
    </div>
  );
}

export default App;
