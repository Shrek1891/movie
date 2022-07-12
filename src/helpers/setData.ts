import Results from "../handlers/Results";

const setData = (data: Results, fav : Array<number> ): HTMLElement => {
    const {id, overview, poster_path, release_date} = data;
    let type = false;
    fav.forEach(element => {
        const currentId = +id;
        if (element === currentId) {
            type = true;
        }
    });
    const cart = document.createElement('div');
    let src;
    let color = "red";
    poster_path === null ? src = '..src/img/images.png' : src = `https://image.tmdb.org/t/p/original//${poster_path}` 
    cart.classList.add('col-lg-3', 'col-md-4', 'col-12', 'p-2');
    cart.setAttribute('data-id', id );
    cart.innerHTML = `
    <div class="card shadow-sm">
    <img
        src="${src}"
    />
    <svg
        xmlns="http://www.w3.org/2000/svg"
        stroke="red"
        fill=${ type ? color : color = '#ff000078' }
        width="50"
        height="50"
        class="bi bi-heart-fill position-absolute p-2"
        viewBox="0 -2 18 22"
    >
        <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
    </svg>
    <div class="card-body">
        <p class="card-text truncate">
            ${overview}
        </p>
        <div
            class="
                d-flex
                justify-content-between
                align-items-center
            "
        >
            <small class="text-muted">${release_date}</small>
        </div>
    </div>
</div>
    `
return cart;

}

export default setData;