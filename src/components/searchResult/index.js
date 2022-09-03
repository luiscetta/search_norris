import React from 'react';

import './styles.scss';

export default function SearchResults({ results }) {
    return (
        <>
            <div className="results-container">
                <h2>Search results:</h2>
                <div className='results-content'>
                    {
                        results.length
                            ?
                            results?.map((item) => {
                                return (
                                    <div className="results-item" key={item.id}>
                                        <p>{item.value}</p>
                                    </div>
                                );
                            })
                            :
                            <p>No results found!</p>
                    }
                </div>
            </div>
        </>
    );
}