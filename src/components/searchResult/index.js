import React from 'react';

export default function SearchResults({ results }) {
    return (
        <>
            {results.map((result, i) => {
                return (
                    <div key={i}>
                        <span>{result.data.value}</span>
                        <span>{result.data.created_at}</span>
                        <span>{result.data.updated_at}</span>
                    </div>
                );
            })}
        </>
    );
}