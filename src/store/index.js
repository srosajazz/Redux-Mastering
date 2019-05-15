import { createStore } from "redux";

//Reducer
const INITIAL_STATE = ["Play Piano", "Learn Harmony"];

//Actions

// Add todo
//Mark todo as complete

// { type: 'ADD_TODO', text: 'New todo' }
// { type: 'MARK_AS_COMPLETED', id: 4 }

function reducer(state = INITIAL_STATE, action) {
  if (action.type === "ADD_TODO") {
    return [...state, action.text];
  }
  return state;
}

const store = createStore(reducer);

export default store;
