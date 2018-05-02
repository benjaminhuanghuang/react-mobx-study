import _ from 'lodash';
import React, { Component } from 'react';
import { render } from 'react-dom';

import './App.css'
import TodosList from '../TodosList/TodosList';
import TodosListItem from '../TodosListItem/TodosListItem';

class App extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            todos: {}
        };
    }

    componentDidMount() {
        this.setState({
            todos: {
                1: { id: 1, completed: false, description: 'task 1' },
                2: { id: 2, completed: true, description: 'task 2' },
                3: { id: 3, completed: false, description: 'task 3' },
                4: { id: 4, completed: false, description: 'task 4' }
            }
        });
    }

    // handleClick={this.toggleTodo.bind(this)}
    // toggleTodo(id, e) {
    //     e.preventDefault();
    //     const todos = _.clone(this.state.todos);
    //     todos[id].completed = !todos[id].completed;
    //     this.setState({ todos });
    // }

    // handleClick={this.toggleTodo} 
    // toggleTodo = (id, e) => {
    //     e.preventDefault();
    //     const todos = _.clone(this.state.todos);
    //     todos[id].completed = !todos[id].completed;
    //     this.setState({ todos });
    // }

    // The first time our new toggleTodo gets called, we return a new function waiting to
    // be called with e as the argument and the todo id stored in a closure.
    // We need to update how we call our new method inside of TodosListItem
     toggleTodo = (id) => (e) => {
        e.preventDefault();
        const todos = _.clone(this.state.todos);
        todos[id].completed = !todos[id].completed;
        this.setState({ todos });
    }

    render() {
        const { todos } = this.state;
        return (
            <TodosList>
                {_.map(todos, (todo, id) =>
                    <TodosListItem key={id} todo={todo} handleClick={this.toggleTodo} />
                )}
            </TodosList>
        );
    }
}
export default App;