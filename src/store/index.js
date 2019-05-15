import { createStore } from "redux";

//Reducer
function reducer() {
  return ["Play Piano", "Learn Harmony"];
}

const store = createStore(reducer);

export default store;
