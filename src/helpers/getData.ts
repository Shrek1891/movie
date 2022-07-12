interface Data {
    page: number,
    results: Array<Results>,
}

interface Results {
    adult: boolean,
    backdrop_path: string,
    genre_ids: Array<number>,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}


const getData = async (url:string): Promise<Data>  => {
    const res = await fetch(url);
    const result = await res.json();
    return result;
}

export default getData;