/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { Helmet } from 'react-helmet';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import Loading from '../../components/Loader';
import chuckNorris from '../../components/assets/chuck.png'
import SearchInput from '../../components/searchInput';
import SearchResults from '../../components/searchResult';

import './styles.scss';

export default function Homepage() {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        if (searchResults.length) setShowResults(true);
    }, [searchResults.length]);

    const doSearch = async () => {

        try {
            setLoading(true);
            const { data } = await axios.get(`https://api.chucknorris.io/jokes/search?query=${searchText}`)
            setSearchResults(data.result);
        } catch (err) {
            alert('Type a word, please!');
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <Helmet title="Search Norris - Search a joke for you..." />
            <div id="top" className="container">
                <div className="content">
                    <img src={chuckNorris} alt="chuck norris with guns" />
                    <h1>Search Norris</h1>
                    <SearchInput
                        value={searchText}
                        onChange={(search) => setSearchText(search)}
                    />
                    <div className="btn-content">
                        <button onClick={doSearch} className='btn-search'>
                            <FaSearch className="search-icon" />
                            Search
                        </button>
                        <button className='btn-lucky'>I'm feeling lucky!</button>
                    </div>
                    {
                        loading
                            ? <Loading />
                            : (showResults && <SearchResults results={searchResults} />)
                    }
                </div>
            </div>
        </>
    );
}
