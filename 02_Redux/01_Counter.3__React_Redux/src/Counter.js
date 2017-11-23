import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    render() {
        const { count, dispatch } = this.props;

        return (
            <div>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
                {count}
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({ count: state });

export default connect(mapStateToProps)(Counter);
