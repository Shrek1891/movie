import API_KEY from "../constants/constants";

const getURL = (type: string, page = 1 , name = 'cruella', id: number): string  => {
    const urlDefault = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    switch (type) {
        case 'popular': {
            const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
            return url;
        }
        case 'rate': {
            const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`;
            return url;
        }
        case 'inFututre' : {
            const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`;
            return url;
        }
        case 'byName' : {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}&language=en-US&page=${page}&include_adult=false`;
            return url;
        }
        case 'byDetail' : {
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
            return url;
        }
        default:
            return urlDefault;
    }
}

export default getURL;