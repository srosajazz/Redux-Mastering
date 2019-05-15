import { createStore } from "redux";

//Reducer
const INITIAL_STATE = [
  { id: 1, text: "Make Coffe", complete: false },
  { id: 2, text: "Learn Harmony", complete: true },
  { id: 3, text: "Learn Code", complete: false }
];

//Actions

// Add todo
//Mark todo as complete

// { type: 'ADD_TODO', text: 'New todo' }
// { type: 'MARK_AS_COMPLETED', id: 4 }

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Math.random(), text: action.text, completed: false }
      ];
    case "MARK_AS_COMPLETED":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: todo.completed } : todo
      );
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
