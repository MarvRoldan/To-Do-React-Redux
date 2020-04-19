import React, { Fragment } from "react";
import AddTodo from "../containers/AddTodo";
import VisibleToDoList from "../containers/VisibleToDoList";
import Footer from './Footer';

const App = () => (
  <Fragment>
    <AddTodo />
    <VisibleToDoList />
    <Footer />
  </Fragment>
);

export default App;
