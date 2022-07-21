import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import './index.css'
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<div className='text-dark'> Working </div>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;