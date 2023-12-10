import logo from '../../public/images/logo-1.png';

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav
          class="navbar navbar-expand-lg sticky-top bg-dark "
          data-bs-theme="dark"
        >
          <div class="container border-bottom pb-2">
            <a class="navbar-brand" href="#/main">
              <img src="${logo}" alt="logo" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown pb-2 pt-2 pb-lg-0 pt-lg-0 mt-3 mt-lg-0">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Movie
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#/nowplaying">Now Palying</a></li>
                    <li><a class="dropdown-item" href="#/popular">Popular</a></li>
                    <li><a class="dropdown-item" href="#/toprated">Top Rated</a></li>
                    <li><a class="dropdown-item" href="#/upcoming">Upcoming</a></li>
                    <li><a class="dropdown-item" href="#/allmovies">All Movies</a></li>
                  </ul>
                </li>
                <li class="nav-item pb-2 pt-2 pb-lg-0 pt-lg-0">
                  <a class="nav-link active" href="#/tv">TV</a>
                </li>
                <li class="nav-item pb-2 pt-2 pb-lg-0 pt-lg-0">
                  <a class="nav-link active" href="#/people">People</a>
                </li>
                <li class="nav-item pb-2 pt-2 pb-lg-0 pt-lg-0">
                  <a class="nav-link active" href="#/favorite">Favorite</a>
                </li>
              </ul>
              <form class="d-flex box-search pb-2 pt-2 pb-lg-0 pt-lg-0" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  id="search"
                />
                <button id="button-search" class="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
    `;

    // const renderFavoriteCount = async () => {
    //   const favoriteCount = await getLengthFavoriteMovie();
    //   const favoriteCountBox = document.getElementById('favoriteCount');
    //   favoriteCountBox.textContent = favoriteCount;
    // };

    // renderFavoriteCount();

    // const renderFavoriteCount = () => {
    //   getLengthFavoriteMovie().then(favoriteCount => {
    //     const favoriteCountBox = document.getElementById('favoriteCount');
    //     favoriteCountBox.textContent = favoriteCount;
    //   });
    // };

    // renderFavoriteCount();

    // document
    //   .querySelector('.navbar-toggler')
    //   .addEventListener('click', function () {
    //     const targetId = this.getAttribute('data-bs-target');
    //     const target = document.querySelector(targetId);
    //     const bsCollapse = new bootstrap.Collapse(target);
    //     bsCollapse.toggle();
    //   });

    // const buttonClose = document.querySelector('.navbar-toggler');
    // const navbarCollapse = document.getElementById('navbarSupportedContent');
    // button.addEventListener('click', (event) => {
    //   event.preventDefault();

    //   navbarCollapse.classList.remove('show');
    // });

    const button = document.getElementById('button-search');
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const keyword = document.getElementById('search').value;
      if (keyword.length > 0) {
        const url = `#/search/${keyword}`;
        window.location.href = url;
      } else {
        alert('Harap isi kolom pencarian.');
      }
    });
  }
}

customElements.define('nav-bar', NavBar);

{
  /* <li class="nav-item pb-2 pt-2 pb-lg-0 pt-lg-0">
                  <a href="#/favorite" type="button" class="btn btn-info position-relative text-light">
                  Favorite
                    <span id="favoriteCount" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark ms-1">
                      <span class="visually-hidden">favorite movies</span>
                    </span>
                  </a>
                </li> */
}
