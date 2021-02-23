import logo from './logo.svg';
import './App.css';
import RenderedTodos from './todos'
const todos = [{
  id: 1,
  activity: "Get out of bed",
  duration: "Wed Sep 13 2017"
},
{
  id: 2,
  activity: "Brush teeth",
  duration: "Thu Sep 14 2017"
},
{
  id: 3,
  activity: "Eat breakfast",
  duration: "Fri Sep 15 2017"
}
];
function App() {
  return (
    <div className="todo-App">
      <RenderedTodos todos={todos} />
    </div>
  );
}

export default App;
