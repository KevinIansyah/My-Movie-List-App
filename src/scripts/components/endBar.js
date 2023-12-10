import logo from "../../public/images/logo-1.png";

class EndBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="card text-center bg-dark mt-5" data-bs-theme="dark">
            <div
            class="card-body d-flex flex-column justify-content-between container flex-md-row"
            >
            <div class="card border-0" style="width: 100%">
                <div class="card-body text-start">
                <img
                    src="${logo}"
                    alt="logo"
                    class="mb-3"
                    style="width: 12rem"
                />
                <p class="card-text">
                    Mymovielist adalah sebuah situs web yang bertujuan membantu
                    pengguna dalam mengetahui dan mencari info film.
                </p>
                </div>
            </div>
            <div class="card border-0" style="width: 100%">
                <div
                class="card-body text-start d-flex justify-content-start justify-content-md-end"
                >
                <div class="d-flex flex-column">
                    <h5 class="card-title">Chortcut</h5>
                    <a href="../index.html">Home</a>
                    <a href="nowPlaying.html">Now Playing</a>
                    <a href="popular.html">Popular</a>
                    <a href="topRated.html">Top Rated</a>
                    <a href="upcoming.html">Upcoming</a>
                    <a href="allMovies.html">All Movies</a>
                </div>
                </div>
            </div>
            <div class="card border-0" style="width: 100%">
                <div
                class="card-body text-start d-flex justify-content-start justify-content-md-end"
                >
                <div class="d-flex flex-column">
                    <h5 class="card-title">Contact</h5>
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">Email</a>
                </div>
                </div>
            </div>
            <div class="card border-0" style="width: 100%">
                <div
                class="card-body text-start d-flex justify-content-start justify-content-md-end"
                >
                <div class="d-flex flex-column">
                    <h5 class="card-title">Addres</h5>
                    <p class="card-text m-0">Surabaya</p>
                    <p class="card-text m-0">Indonesia</p>
                </div>
                </div>
            </div>
            </div>
            <div class="card-footer text-body-secondary">
            &copy; MyMovieList2023 - Kevin Iansyah
            </div>
        </div>
    `;
  }
}

customElements.define("end-bar", EndBar);
