import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Movie from './components/pages/Movie';
import Movies from './components/pages/Movies';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/movies" element={ <Movies />} />
                    <Route path="/movies/:id" element={<Movie />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
