import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../actions';

import './FilterLink.css';

class FilterLink extends Component {
    render() {
        const { active, children, onClick } = this.props;

        return (
            <span
                className={`FilterLink ${active && 'FilterLink--active'}`}
                onClick={active ? null : onClick}
            >
                {children}
            </span>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        active: ownProps.filter === state.filter
    }),
    (dispatch, ownProps) => ({
        onClick: () => dispatch(setFilter(ownProps.filter))
    }),
)(FilterLink);
