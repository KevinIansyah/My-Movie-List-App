import MovieSource from '../../data/movieSource';
import { hideLoader } from '../../utils/loader-initiator';

const Upcoming = {
  async render() {
    const heroElement = document.querySelector('carousel-element');
    if (heroElement) {
      heroElement.innerHTML = '';
    }

    return `
        <div class="container">
          <h5 class="text-light mb-4 mt-5">UPCOMING</h5>
          <p class="text-light fst-italic">Ongoing.</p>
        </div>
    `;
  },

  async afterRender() {
    hideLoader();
  },
};

export default Upcoming;
