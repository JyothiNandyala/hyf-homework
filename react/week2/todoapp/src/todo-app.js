import React, { useState } from "react";
import Timer from "./Timer";

function TodosList({ id, description, removeTodo }) {
  const [isDone, setIsDone] = useState("");
  return (
    <div>
      <li
        className="list-of-todos"
        style={
          isDone ? { textDecoration: "line-through" } : { textDecoration: "" }
        }
      >
        {description}
        <span>
          <input type="checkbox" onClick={() => setIsDone(!isDone)} />
          <button onClick={() => removeTodo(id)}>Delete</button>
        </span>
      </li>
    </div>
  );
}

const RenderedTodos = ({ todos }) => {
  const [todoList, setTodoList] = useState(todos);
  const [value, setValue] = useState("");
  //adding the todos to todos array
  const OnClickAddTodo = () => {
    if (value !== "") {
      const myNextTodos = { id: todoList.length + 1, description: value };
      const myNextTodoNames = todoList.concat(myNextTodos);
      setValue("");
      setTodoList(myNextTodoNames);
    }
  };
  //Remove the todos
  const removeTodo = (removeId) => {
    const newTodos = todoList.filter((data) => data.id !== removeId);
    setTodoList(newTodos);
  };

  return (
    <>
      <ul>
        <h1 className="todo-header">Todo List</h1>
        <Timer />
        {todoList.length > 0
          ? todoList.map((todo) => {
              return (
                <TodosList
                  description={todo.description}
                  key={todo.id}
                  removeTodo={removeTodo}
                  id={todo.id}
                />
              );
            })
          : "No Items"}

        <div className="addtodo_button">
          <input
            type="text"
            placeholder="Add new todos here"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          ></input>
          <button onClick={OnClickAddTodo}>Add todo</button>
        </div>
      </ul>
    </>
  );
};

export default RenderedTodos;
