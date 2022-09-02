import React from 'react';

import './styles.scss';


export default function SearchInput({ value, onChange }) {
    function handleChange(event) {
        onChange(event.target.value);
    }

    return (
        <div className="input-field">
            <label htmlFor='input'>Search for a word</label>
            <input
                type="search"
                autoFocus
                value={value}
                onChange={handleChange}
                minLength={1}
            />
        </div>
    );
};

