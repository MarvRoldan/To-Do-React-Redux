import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }: any ) => (
  <ul>
    {todos.map((todo: any) => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}/>
    ))}
  </ul>
);

export default TodoList;
