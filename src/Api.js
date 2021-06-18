export const API_URL = 'http://localhost:8000/api';

export function ALL_MOVIES_GET() {
    return {
        url: API_URL + '/movie/all',
        options: {
            method: 'GET',
            headers: {
            },
        },        
    };
}

export function VERIFY_MOVIES_GET() {
    return {
        url: API_URL + '/movie/verify',
        options: {
            method: 'GET',
            headers: {
            },
        },        
    };
}

export function MOVIE_GET(id) {
    return {
        url: API_URL + `/movie/${id}`,
        options: {
            method: 'GET',
            headers: {
            },
        },        
    };
}