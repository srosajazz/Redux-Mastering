import React from "react";

import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

// import { Container } from './styles';
const TodoList = ({ todos, dispatch }) => (
  <View style={{ flex: 1, backgroundColor: "#FFF", justifyContent: "center" }}>
    {todos.map(todo => (
      <Text key={todo}>{todo}</Text>
    ))}
    <Button
      onPress={() => dispatch({ type: "ADD_TODO", text: "New todo" })}
      title="Adding todo"
    />
  </View>
);

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(TodoList);
