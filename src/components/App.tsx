import React, { Fragment } from "react";
import AddTodo from "../containers/AddTodo";
import VisibleToDoList from "../containers/VisibleToDoList";

const App = () => (
  <Fragment>
    <AddTodo />
    <VisibleToDoList />
  </Fragment>
);

export default App;
