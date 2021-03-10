import "./App.css";
import Timer from "./Timer";
import FetchFromApi from "./FetchTodos";

function App() {
  return (
    <div className="App">
      <Timer />
      <FetchFromApi />
    </div>
  );
}

export default App;
