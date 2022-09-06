import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Homepage from '../../Pages/Homepage';


export default function Layout() {
    return (
        <Router>
            <Homepage />
        </Router>
    );
}