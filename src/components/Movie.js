import React from 'react';
import styles from './Movie.module.css';

const Movie = ({ movie }) => {
    console.log(movie);
    return (
        <div className={ styles.movie }>
            <div className={ styles.poster_vote }>
                <img className={ styles.poster } src={ movie.poster_path } alt={ `Poster de ${movie.title}` } />
                <div className={ styles.vote }>{ movie.vote_average }</div>
            </div>
            <h3 className={ styles.title }>{ movie.title }</h3>
        </div>
    )
}

export default Movie;
