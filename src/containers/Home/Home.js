import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import todoAction from '../../redux_flow/todo/todoAction';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

@connect(
  state => ({
    todos: state.todoReducer,
  }), {
    ...todoAction
  }
)
export default class Home extends Component {
  static propTypes = {
    todos: PropTypes.array,
    addTodo: PropTypes.func,
    removeTodo: PropTypes.func,
  }

  render() {
    const { todos, addTodo, removeTodo } = this.props;

    return (
      <div id="home">
        <AddTodo
          handleAddTodo={addTodo}
        />
        <TodoList
          todos={todos}
          handleRemoveTodo={removeTodo}
        />
      </div>
    );
  }
}