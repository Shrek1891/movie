import setOnPage from './helpers/setOnPage';
import fillGalary from './helpers/fillGalary';
import getLocalStorage from './helpers/getLocalStorge';
import randomMovie from './helpers/randomMovie';
import setByOne from './helpers/setByOne';


export async function render(): Promise<void> {
    // TODO render your app here
    const popularBtn = document.querySelector('#popular') as Element;
    const upcomingBtn = document.querySelector('#upcoming') as Element;
    const topRated = document.querySelector('#top_rated') as Element;
    const loadMoreBtn = document.querySelector('#load-more') as Element;
    const filmContainer = document.querySelector('#film-container') as Element;
    const submitBtn = document.querySelector('#submit') as Element;
    const input = document.querySelector('#search') as HTMLInputElement;
    const favMovie = document.querySelector('#favorite-movies') as Element;
    const randTitle = document.querySelector('#random-movie-name') as Element;
    const randOver = document.querySelector('#random-movie-description') as Element;
    const currentLS = getLocalStorage('favMovie') as Array<number>;
    currentLS.forEach(element => {
        setByOne(element, currentLS,favMovie);
    });
    let typeOffilms= 'popular';
    let page = 1;
    const result = await setOnPage('popular');
    fillGalary(result, filmContainer);
    randomMovie(result, randTitle, randOver);
    popularBtn?.addEventListener('click', async () => {
        const type = 'popular';
        page = 1;
        typeOffilms = type;
        if (filmContainer !== null) {
            filmContainer.innerHTML='';
            const res = await setOnPage(type);
            fillGalary(res, filmContainer);
            randomMovie(res, randTitle, randOver);
        }
    });
    upcomingBtn?.addEventListener('click',async () => {
        const type = 'inFututre';
        typeOffilms = type;
        page = 1;
        if (filmContainer !== null) {
            filmContainer.innerHTML='';
            const res = await setOnPage(type);
            fillGalary(res, filmContainer);
            randomMovie(res, randTitle, randOver);
        }
    });
    topRated?.addEventListener('click',async () => {
        const type = 'rate';
        page = 1;
        typeOffilms = type;
        if (filmContainer !== null) {
            filmContainer.innerHTML='';
            const res = await setOnPage(type);
            fillGalary(res, filmContainer);
            randomMovie(res, randTitle, randOver);
        }
    });
    loadMoreBtn?.addEventListener('click', async () => {
        page +=1;
        const res = await setOnPage(typeOffilms, page);
        fillGalary(res, filmContainer);
    });
    submitBtn?.addEventListener('click' ,async () => {
        const type = 'byName';
        typeOffilms = type;
        if (filmContainer !== null) {
            filmContainer.innerHTML='';
            if (input !== null) {
                const query  = input.value ;
                const res = await setOnPage(typeOffilms, page, query);
                fillGalary(res, filmContainer);
                randomMovie(res, randTitle, randOver);
                input.value = '';
            }
        }
    });
    filmContainer?.addEventListener('click', (e) => {
        const itemClick = e.target as Element |  null;
        const getId = itemClick?.closest('.col-lg-3')?.getAttribute('data-id') as string;
        const currentId = +(getId) as number;
        if (itemClick?.classList.contains('bi-heart-fill') || itemClick?.closest('svg')?.classList.contains('bi-heart-fill')) {
            if (itemClick.closest('svg')?.getAttribute('fill') === '#ff000078') {
                itemClick.closest('svg')?.setAttribute('fill', 'red');
                const res = [...getLocalStorage('favMovie')];
                res.push(currentId);
                const up = JSON.stringify(res);
                localStorage.setItem('favMovie', up);
                setByOne(currentId, res, favMovie);
                
            } else {
                itemClick.closest('svg')?.setAttribute('fill', '#ff000078');
                const res = [...getLocalStorage('favMovie')];
                const index = res.indexOf(currentId);
                if ( index !== -1) {
                    res.splice(index, 1);
                }
                localStorage.setItem('favMovie', JSON.stringify(res));
                const item = favMovie?.querySelector(`[data-id = "${currentId}"]`) as Node;
                favMovie?.removeChild(item);
            }
                
        }
    }) 
}

