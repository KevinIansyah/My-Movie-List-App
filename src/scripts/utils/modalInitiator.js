import { createIframe } from "../views/templates/createMovieTemplates";

const ModalInitiator = {
  init({ buttonCloseVideo, buttonTriggerVideo, modalVideo, iframeVideo, videoTrailer }) {
    buttonTriggerVideo.addEventListener('click', (event) => {
      this._toggleDrawerVideo(event, modalVideo);
    });

    buttonCloseVideo.addEventListener('click', (event) => {
      this._closeDrawerVideo(event, modalVideo, buttonTriggerVideo, iframeVideo, videoTrailer);
    });
  },

  _toggleDrawerVideo(event, modalVideo) {
    event.stopPropagation();

    modalVideo.classList.add('active');
    // modalVideo.focus();
  },

  _closeDrawerVideo(event, modalVideo, buttonTriggerVideo, iframeVideo, videoTrailer) {
    event.stopPropagation();

    modalVideo.classList.remove('active');
    iframeVideo.innerHTML = '';
    // buttonTriggerVideo.focus();
    if (videoTrailer.length > 0) {
      iframeVideo.innerHTML = createIframe(videoTrailer[0]);
    }
  },
};

export default ModalInitiator;
