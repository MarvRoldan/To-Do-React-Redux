import React, { Fragment } from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <Fragment>
    <AddTodo />
    <VivibleToDoList />
  </Fragment>
);

export default App;
