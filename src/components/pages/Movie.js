import React from 'react';
import styles from './Movie.module.css';
import { NavLink, useParams } from 'react-router-dom';
import { MOVIE_GET } from '../../Api';
import useFetch from '../../Hooks/useFetch';

const Movie = () => {
    const { id } = useParams();
    const [data, setData] = React.useState(null);
    const { loading, error, request } = useFetch();

    React.useEffect(() => {
        async function getMovie(event) {
            const {url, options} = MOVIE_GET(id);
            const { json } = await request(url, options);
            setData(json);
        }
        getMovie();
    }, [id, request]);

    if(error)
        return (
            <section className={ styles.movies }>
                <h1>Filmes</h1>
                <NavLink to="/movies"  className={ styles.back }>Voltar</NavLink>
                <p>Erro: {error}</p>;
            </section>
        )
    if(loading)
        return (
            <section className={ styles.movies }>
                <h1>Filmes</h1>
                <NavLink to="/movies"  className={ styles.back }>Voltar</NavLink>
                <p>Carregando...</p>
            </section>
        )
    if(data) {
        return (
            <section className={ styles.movies }>
                <h1>Filmes</h1>
                <NavLink to="/movies"  className={ styles.back }>Voltar</NavLink>
                <div className={ styles.movie }>
                    <img className={ styles.poster } src={ data.poster_path } alt={ `Poster de ${data.title}` } />
                    <div className={ styles.infos }>
                        <p><span>Título: </span>{ data.title }</p>
                        <p><span>Título Original: </span>{ data.original_title }</p>
                        <p><span>Gêneros: </span>{data.genres.map((genre) => genre.title + ', ' )}</p>
                        <p><span>Data de Lançamento: </span>{ data.release_date_formatted }</p>
                        <p><span>Sinopse: </span>{ data.overview }</p>
                        <div className={ styles.votes }>
                            <div className={ styles.vote }>
                                <p className={ styles.value }>{data.vote_average}</p>
                                <p className={ styles.font }>Média dos Votos</p>
                            </div>
                            { data.votes.map((vote) => (
                                <div className={ styles.vote }>
                                    <p className={ styles.value }>{vote.vote_average}</p>
                                    <p className={ styles.font }>{vote.name_api}</p>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    else return null;
}

export default Movie;
