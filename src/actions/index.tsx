let nextToDoId = 0;

export const addTodo = (text: any) => ({
  type: "ADD_TODO",
  id: nextToDoId++,
  text,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
