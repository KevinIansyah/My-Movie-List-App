const loaderElement = document.querySelector('.loader');

const showLoader = () => {
  loaderElement.classList.remove('loader-hidden');
};

const hideLoader = () => {
  setTimeout(() => {
    loaderElement.classList.add('loader-hidden');
  }, 800);
};

export {showLoader, hideLoader };
