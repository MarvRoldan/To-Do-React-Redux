let nextToDoId = 0;

export const addTodo = (text: any) => ({
    type: 'ADD_TODO',
    id: nextToDoId++,
    text
});