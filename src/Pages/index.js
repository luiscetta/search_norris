/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { Helmet } from 'react-helmet';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import chuckNorris from '../components/assets/chuck.png'
import SearchInput from '../components/searchInput';
import SearchResults from '../components/searchResult';

import './styles.scss';

export default function Homepage() {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchresults] = useState([]);

    useEffect(() => {
        doSearch();
    }, []);


    const doSearch = async (search) => {
        setSearchText(search);
        const result = await axios.get('https://api.chucknorris.io/jokes/random', { search }).data;
        console.log(result);
        setSearchresults({
            joke: result.data.value,
            created_at: result.data.created_at,
            updated_at: result.data.updated_at,
        });
    };

    return (
        <>
            <Helmet title="Search Norris - Search for a word..." />
            <div className="container">
                <div className="content">
                    <div className="input-search-content">
                        <img src={chuckNorris} alt="chuck norris with guns" />
                        <h1>Search Norris</h1>
                        <SearchInput value={searchText} onChange={(search) => doSearch(search)} />
                        <div className="btn-content">
                            <button className='btn-search'>
                                <FaSearch className="search-icon" />
                                Search
                            </button>
                            <button className='btn-lucky'>I'm feeling lucky!</button>
                        </div>

                        <div className="search-results">
                            {searchResults.length ? <SearchResults results={searchResults} /> : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
