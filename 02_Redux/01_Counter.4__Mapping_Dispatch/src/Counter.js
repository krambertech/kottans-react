import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        const { count, increment, decrement } = this.props;

        return (
            <div>
                <button onClick={decrement}>-</button>
                {count}
                <button onClick={increment}>+</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({ count: state });

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
