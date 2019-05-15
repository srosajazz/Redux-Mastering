export const addTodo = () => ({
  type: "ADD_TODO",
  payload: { text: "New todo" }
});

export const markAsComplete = id => ({
  type: "MARK_AS_COMPLETED",
  payload: { id }
});
