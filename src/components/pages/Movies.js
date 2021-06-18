import React from 'react';
import styles from './Movies.module.css';
import { NavLink } from 'react-router-dom';
import { ALL_MOVIES_GET, VERIFY_MOVIES_GET } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import Movie from '../Movie';

const Movies = () => {
    const [data, setData] = React.useState(null);
    const { loading, error, request } = useFetch();

    React.useEffect(() => {
        async function getAllMovies(event) {
            const {url, options} = ALL_MOVIES_GET();
            const { json } = await request(url, options);
            setData(json);
        }
        getAllMovies();
    }, [request]);

    async function verifyMoviesList() {
        const {url, options} = VERIFY_MOVIES_GET();
        const { json } = await request(url, options);
        setData(json);
    }

    
    if(error)
        return (
            <section className={ styles.movies }>
                <h1>Filmes</h1>
                <p>Erro: {error}</p>;
            </section>
        )
    if(loading)
        return (
            <section className={ styles.movies }>
                <h1>Filmes</h1>
                <p>Carregando...</p>
            </section>
        )
    if(data)
        return (
            <section className={ styles.movies }>
                <div className={ styles.start }>
                    <h1>Filmes</h1>
                    <button className={ styles.verify } onClick={verifyMoviesList}>Verificar Filmes</button>
                </div>
                {data.map((movie) => (
                    <NavLink to={ `/movies/${movie.id}` } key={movie.id} className={ styles.movie }>
                        <Movie movie={movie} />
                    </NavLink>
                ))}
            </section>
        )
    else return null;
}

export default Movies;
