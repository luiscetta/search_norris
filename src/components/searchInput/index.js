import React from 'react';

import './styles.scss';


export default function SearchInput({ value, onChange }) {
    return (
        <div className="input-field">
            <label htmlFor='input'>Search for a word (or text)</label>
            <input
                className='search-input'
                type="search"
                autoFocus
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

