/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { GiClover } from 'react-icons/gi';

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
    const [feelingLucky, setFeelingLucky] = useState(false);

    async function doSearch() {
        try {
            setFeelingLucky(false);
            setLoading(true);
            const { data } = await axios.get(`https://api.chucknorris.io/jokes/search?query=${searchText}`)
            // console.log(data);
            setSearchResults(data.result);
        } catch (err) {
            if (err?.response?.status === 400) {
                ErrorToast('Your search must have at least 3 characters, please!');
            } else {
                ErrorToast('Unexpected error');
            }
        } finally {
            setLoading(false);
        }
    };

    async function doFeelingLucky() {
        try {
            setFeelingLucky(true);
            setLoading(true);
            const { data } = await axios.get('https://api.chucknorris.io/jokes/random');
            // console.log(data);
            setSearchResults([data]);
        } catch (err) {
            ErrorToast('Unexpected error');
        } finally {
            setLoading(false);
        }
    }

    function handleChange(event) {
        setSearchText(event.target.value);
    }

    return (
        <>
            <Helmet title="Search Norris - Search a joke for you..." />
            <div id="top" className="container">
                <div className="content">
                    <img src={chuckNorris} alt="chuck norris with guns" />
                    <h1>Search Norris</h1>
                    <SearchInput
                        value={searchText}
                        onChange={handleChange}
                    />
                    <div className="btn-content">
                        <button onClick={doSearch} className='btn-search'>
                            <FaSearch className="search-icon" />
                            Search
                        </button>
                        <button onClick={doFeelingLucky} className='btn-lucky'>
                            <GiClover className="lucky-icon" />
                            I'm feeling lucky!
                        </button>
                    </div>
                    {
                        loading
                            ? <Loading />
                            : (searchResults && <SearchResults id="results" results={searchResults} feelingLucky={feelingLucky} />)
                    }
                </div>
            </div>
        </>
    );
}



