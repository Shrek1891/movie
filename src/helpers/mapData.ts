
const mapData = async (data) => {
    const result = [...data.results];
    const mapResult = result.map(item => {
        const {id, title, overview, poster_path, release_date} = item;
        const newRes = {id, title, overview, poster_path, release_date};
        return newRes;
    } )
    return mapResult;
}

export default mapData;