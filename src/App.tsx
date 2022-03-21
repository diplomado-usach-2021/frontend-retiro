import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Components
import Login from 'components/Login';
import Home from 'components/Home';
import {About} from "./components/About";
import Main from "./components/Main"
import './App.css';
import Retire from 'components/Retire/Retire';

function App() {
    return (
        <Router>            
            <Home />            
            <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path={'/about'} element={<About/>} />                    
                    <Route path={'/retire'} element={<Retire/>} />
                    <Route path={'/main'} element={<Main/>} />                    
                    <Route path={'/'} element={<Main/>} />                    
            </Routes>
        </Router>
    );
}

export default App;
