import getURL from "./getURL";
import setData from "./setData";

const setByOne = (element:number, list:Array<number>, node:Element | null):void => {
    const currentURL =  getURL('byDetail', 1, 'cruella', element);
    fetch(currentURL)
        .then((res) => res.json())
        .then((data) => {
            const card = setData(data, list);
            card.classList.remove('col-lg-3', 'col-md-4', 'col-12', 'p-2');
            card.classList.add('col-12', 'p-2');
            node?.appendChild(card);
        });
}

export default setByOne;