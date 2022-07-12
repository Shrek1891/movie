import getURL from './getURL';
import getData from './getData';
import mapData from './mapData';
import Results from '../handlers/Results';



const setOnPage = async (type: string, page?: number|undefined, query?: string|undefined): Promise< Array<Results>> => {
    const url = getURL(type, page, query, 1);
    const res = await getData(url);
    const result = await mapData(res);
    return result;
}

export default setOnPage;