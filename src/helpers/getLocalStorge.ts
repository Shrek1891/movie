const getLocalStorage = (name: string):Array<number> => {
    let currentLS;
    const mediator = localStorage.getItem(name);
    mediator ? currentLS = JSON.parse(mediator) : currentLS =[];
    return currentLS;
}

export default getLocalStorage;