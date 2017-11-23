import React, { Component } from 'react';

import './User.css';

export default class User extends Component {
    render() {
        const { link, name, avatar } = this.props;

        return (
            <a href={link} target='_blank' className="User">
                <img alt={name} className="User__avatar" src={avatar} />
                <div className="User__info">
                    <div className="User__name">{name}</div>
                </div>
            </a>
        );
    }
}
