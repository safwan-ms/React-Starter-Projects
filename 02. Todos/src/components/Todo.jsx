import React, { useState } from "react";
import "../style.css";
const Todo = () => {
  // UseStates for Todo-List and Inputs
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  // Submission Functionality
  const handleSubmit = () => {
    if (input.trim() === "") return;
    setTodo((todo) => {
      return todo.concat({
        text: input,
        id: Math.floor(Math.random() * 1000),
      });
    });
    setInput("");
  };

  //   Removing Functionality
  const removeTodo = (id) => setTodo((todo) => todo.filter((t) => t.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {todo.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
