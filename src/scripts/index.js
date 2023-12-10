import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/style.css';
import './components/carousel';
import './components/navBar';
import './components/endBar';
import './components/loader';
import App from './views/app';
import { showLoader, hideLoader } from './utils/loader-initiator';
import showTooltip from '../scripts/global/tooltip'
// import 'bootstrap';
// import { createPopper } from '@popperjs/core';

const app = new App();

window.addEventListener('hashchange', () => {
  showLoader();
  app.renderPage();
});

window.addEventListener('load', async () => {
  await app.renderPage();
});

