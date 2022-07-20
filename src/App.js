import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<div> Working </div>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;