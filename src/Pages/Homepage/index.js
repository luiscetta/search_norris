/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { Helmet } from 'react-helmet';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import Loading from '../../components/Loader';
import chuckNorris from '../../components/assets/chuck.png'
import SearchInput from '../../components/searchInput';
import SearchResults from '../../components/searchResult';
import { ErrorToast } from '../../utils/Toaster';

import './styles.scss';


export default function Homepage() {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [loading, setLoading] = useState(false);

    async function doSearch() {
        try {
            setLoading(true);
            const { data } = await axios.get(`https://api.chucknorris.io/jokes/search?query=${searchText}`)
            setSearchResults(data.result);
        } catch (err) {
            if (err.response.status === 400) {
                ErrorToast('Your search must have at least 3 characters, please!');
            }
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
                            : (searchResults && <SearchResults id="results" results={searchResults} />)
                    }
                </div>
            </div>
        </>
    );
}



