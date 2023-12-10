import axios from "axios";

class Carousel extends HTMLElement {
  connectedCallback() {
    this.getPopular();
  }

  getPopular = () => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGMxOTVhMTZjMDRiNTM3Yzc3MjAwZTAyODc4NGNhNCIsInN1YiI6IjY1MDkwZDBjMTA5ZGVjMDBhZWIwYmE0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ca3ui--oQ9O47Ab9QGIKsw2qN4vv7Vl1vlg24x5PdNs",
      },
    };

    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        options
      )
      .then((response) => {
        this.render(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render(popularData) {
    this.innerHTML = `
        <div id="carouselExampleCaptions" class="carousel carousel-light slide container">
          <div class="carousel-indicators">
            ${popularData
              .map(
                (data, index) => `
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}" ${
                  index === 0 ? 'class="active" aria-current="true"' : ""
                } aria-label="Slide ${index + 1}"></button>
              `
              )
              .join("")}
          </div>
          <div class="carousel-inner rounded">
            ${popularData
              .map(
                (data, index) => `
                <div class="carousel-item ${index === 0 ? "active" : ""}">
                  <div class="image-container">
                    <img src="${
                      "https://image.tmdb.org/t/p/w1280" + data.backdrop_path
                    }" class="d-block w-100 object-fit-cover" alt="${
                  data.title
                }" style="height: 35rem" />
                    <div class="image-overlay"></div>
                  </div>
                  <div class="carousel-caption">
                    <h5>${data.title}</h5>
                    <p>${data.overview}</p>
                  </div>
                </div>
              `
              )
              .join("")}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    `;
  }
}

customElements.define("carousel-element", Carousel);
