import { connect } from "react-redux";
import {VisibilityFilters} from '../actions'
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((task) => task.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((task) => !task.completed);
    default:
      throw new ErrorEvent("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state: any) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

/*const mapDispatchToProps = (dispatch: any) => (
    toggleTodo: id => dispatch(toggleTodo(id))
);*/

export default connect(
    mapStateToProps
)(TodoList);
