import React, { Component } from 'react';

import './Picker.css';

export default class Picker extends Component {
    render() {
        const { value, options, onChange } = this.props;

        return (
            <div className="Picker">
                <select
                    value={value}
                    onChange={e => onChange(e.target.value)}
                >
                    {
                        options.map(option =>
                            <option value={option} key={option}>
                                {option}
                            </option>
                        )
                    }
                </select>
            </div>
        );
    }
}
