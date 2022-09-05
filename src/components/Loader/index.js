import React from 'react';
import { ProgressBar as Loader } from 'react-loader-spinner';

import './styles.scss';


export default function Loading() {
    return (
        <div className="loader">
            <Loader color="#fff"/>
        </div>
    )
}
