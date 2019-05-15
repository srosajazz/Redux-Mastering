import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./TodoList";
import { View } from "react-native";

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
