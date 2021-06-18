import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Popcorn } from '../assets/logo.svg';

const Header = () => {
    return (
        <header className={ styles.header }>
            <nav className={ styles.nav }>
                <Link to="/" className={ styles.logo } aria-label="Popcorn | Home"><Popcorn /></Link>
                <button href="#" className={ styles.message }>
                    Bem-vindo!
                </button>
            </nav>

            <nav className={ styles.sidenav }>
                <p>Navegação</p>
                <Link to="/movies" className={ `${styles.link} ${styles.link_movie}` } aria-label="Popcorn | Filmes">Filmes</Link>
            </nav>
        </header>
    )
}

export default Header;
