import setData from './setData';
import getLocalStorage from './getLocalStorge';



const fillGalary =  (
    data: 
    { 
        id: string; 
        title: string; 
        overview: string; 
        poster_path: string; 
        release_date: string; }[],  
        node: Element | null
      ):void => {
    const currentLocalStorage = getLocalStorage('favMovie');
    data.forEach((element : { id : string; overview : string; poster_path: string; release_date: string; title: string } ) => {
        const res =  setData(element, currentLocalStorage);
        node?.append(res);
    });
}

export default fillGalary;