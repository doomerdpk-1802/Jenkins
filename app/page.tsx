"use client";

import { useState, ChangeEvent } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (!todo.trim()) return;

    setTodos((prev) => [...prev, todo]);
    setTodo("");
  };

  const deleteTodo = (value: string) => {
    setTodos((prev) => prev.filter((t) => t !== value));
  };

  return (
    <main>
      <h1>✅ Todo App</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Conquer chaos! one task at a time...!!"
          value={todo}
          onChange={handleChange}
        />
        <button type="button" onClick={addTodo}>
          Add
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="empty">No todos yet ✨</p>
      ) : (
        <ul>
          {todos.map((t) => (
            <li key={t}>
              <span className="todo-text">{t}</span>
              <button
                type="button"
                className="delete-btn"
                onClick={() => deleteTodo(t)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
