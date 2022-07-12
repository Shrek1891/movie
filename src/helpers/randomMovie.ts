
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

interface DataShort {
        id: string; 
        title: string; 
        overview: string; 
        poster_path: string; 
        release_date: string; 
}

const randomMovie = (result: Array<Results> | Array<DataShort>, randTitle: Element | null , randOver: Element | null): void => {
    const randIndex = Math.floor(Math.random()*20);
    const banner = result[randIndex];
    if ( randTitle !== null && randOver !== null)  {
        randTitle.textContent = banner.title;
        randOver.textContent = banner.overview;
    }

}

export default randomMovie;