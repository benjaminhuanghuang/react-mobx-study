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
    render() {
        return (
            <div>
                {this.count}
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

export default Counter;