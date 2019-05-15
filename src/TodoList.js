import React, { Component } from "react";

import { View } from "react-native";

// import { Container } from './styles';

export default class TodoList extends Component {
  state = { todos: ["Play Piano", "Learn Harmony"] };
  render() {
    return <View todos={this.state.todos} />;
  }
}
