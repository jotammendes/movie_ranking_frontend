import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Home from './components/pages/Home';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/login" element={ <Login /> } />
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
