import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Counter extends Component {
    @observable count = 0;
    increment = () => {
        this.count += 1;
    }

    decrement = () => {
        this.count -= 1;
    }

    state = {
        count2: 0
    }
    increment2 = () => {
        this.setState({
            count2: this.state.count2 + 1
        })
        // setState is aync 
        this.setState({
            count2: this.state.count2 + 1
        })
    }

    decrement2 = () => {
        this.setState({
            count2: this.state.count2 - 1
        })
    }
    render() {
        return (
            <div>
                <div>
                    {this.count}
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>
                <div>
                    {this.state.count2}
                    <button onClick={this.increment2}>+</button>
                    <button onClick={this.decrement2}>-</button>
                </div>
            </div>
        );
    }
}

export default Counter;