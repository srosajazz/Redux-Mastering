import React from "react";

import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionsCreators } from "redux";
import * as TodosActions from "~/store/actions/todos";

// import { Container } from './styles';
const TodoList = ({ todos, addTodo, markAsComplete }) => (
  <View style={{ flex: 1, backgroundColor: "#FFF", justifyContent: "center" }}>
    {todos.map(todo => (
      <Text
        onPress={markAsComplete(todo.id)}
        style={{ textDecorationLine: todo.complete ? "line-through" : "none" }}
        key={todo.id}
      >
        {todo.text}
      </Text>
    ))}
    <Button onPress={addTodo} title="Adding todo" />
  </View>
);

const mapStateToProps = state => ({
  todos: state
});

const mapDispatchToProps = dispatch =>
  bindActionsCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
