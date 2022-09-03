import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Homepage from '../Pages/Homepage';
import Luckypage from '../Pages/Luckypage';


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/luckypage" element={<Luckypage />} /> */}
        </Routes>
    );
}