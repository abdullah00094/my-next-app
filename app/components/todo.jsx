"use client";

import { useEffect, useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await result.json();
      setTodo(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>userId : {todo.title}</h1>
      <h1>{todo.title}</h1>
    </div>
  );
}
