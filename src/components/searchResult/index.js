import React from 'react';
import Lottie from 'lottie-react';

import chuck_like from '../assets/chuck_like.png';
import animationData from '../assets/json/emoji.json';

import './styles.scss';


export default function SearchResults({ results, feelingLucky }) {
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
                                    <div className={feelingLucky ? 'lucky-item' : 'results-item'} key={item.id}>
                                        {
                                            feelingLucky && <img src={chuck_like} alt="chuck norris icon" />
                                        }
                                        <p>{item.value}</p>
                                    </div>
                                );
                            })
                            :
                            <div className="no-results-container">
                                <h3>No results found!</h3>
                                <Lottie 
                                    animationData={animationData}
                                    loop={true}
                                    autoplay={true}
                                    style={{height: '13rem'}}
                                />
                            </div>
                    }
                </div>
            </div>
        </>
    );
}