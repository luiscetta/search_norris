import React from 'react';

import './styles.scss';


const SearchInput = ({ value, onChange }) => {
    function handleChange(event) {
        onChange(event.target, value);
    }

    return (
        <div className="input-field">
            <label htmlFor='input'>Search for a word</label>
            <input
                type="search"
                autoFocus
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchInput;