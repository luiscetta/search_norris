import React from 'react';

import './styles.scss';

export default function SearchResults({ results }) {
    return (
        <>
            <div className="results-container">
                <h2>Search results:</h2>
                <div className='results-content'>
                    {results.map((result) => {
                        return (
                            <ul className="results-item" key={result.id}>
                                <li>{result.value}</li>
                            </ul>
                        );
                    })}
                </div>
            </div>
        </>
    );
}