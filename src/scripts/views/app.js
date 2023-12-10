import UrlParser from '../routes/urlParser';
import Routes from '../routes/routes';

class App {
  async renderPage() {
    const content = document.querySelector('#main');
    const url = UrlParser.parseActiveUrlWithCombiner();
    if (url == '/detail/:id') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    const page = Routes[url];
    content.innerHTML = await page.render();
    await page.afterRender();

    // const skipLinkElem = document.querySelector('.skip-link');
    // skipLinkElem.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   document.querySelector('#mainContent').focus();
    // });
  }
}

export default App;
