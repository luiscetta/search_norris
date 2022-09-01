/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './styles.scss';

export default function Homepage() {
    const [state, setState] = useState({
        joke: '',
        created_at: '',
        updated_at: '',
    });
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        doSearch();
    }, []);


    const doSearch = async (search) => {
        setSearchText(search);
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log(result);
        setSearchText({
            ...state,
            joke: result.data.value,
            created_at: result.data.created_at,
            updated_at: result.data.updated_at,
        });
    };

    return (
        <div className="container">
            <div className="content">
                <div className="joke-content">
                    <h2>Search results:</h2>
                    <h4>{state.joke}</h4>
                    <span>{state.created_at}</span>
                    <span>{state.updated_at}</span>
                </div>
            </div>
        </div>
    );
}
