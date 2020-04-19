import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo: any = ({ dispatch }: any) => {
  let input: any;

  return (
    <Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!input.value.trim()) {
            return;
          }

          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input type="text" ref={(el) => (input = el)} />
        <button type="submit">Add Todo</button>
      </form>
    </Fragment>
  );
};

export default connect()(AddTodo);
