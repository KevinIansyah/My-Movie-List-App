import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const fancyBoxDefault = () => {
  Fancybox.bind('[data-fancybox]', {});
};

const fancyBoxCredit = () => {
  Fancybox.bind('[data-fancybox="credit"]', {
    placeFocusBack: false,

    tpl: {
      main: `<div class="fancybox__container has-sidebar" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
        <div class="fancybox__backdrop"></div>
        <div class="fancybox__cols">
          <div class="fancybox__col">
            <div class="fancybox__carousel"></div>
            <div class="fancybox__footer"></div>
          </div>
          <div class="fancybox__col">
            <div class="fancybox__data">
              <h4 class="mb-4 text-lg font-semibold">CREDITS</h4>
              <p class="font-semibold mb-2" id="fancybox_name"></p>
              <p class="font-semibold" id="fancybox_character"></p>
            </div>
          </div>
        </div>
      </div>`,
    },

    idle: false,
    compact: false,
    dragToClose: false,

    showClass: 'f-fadeIn',
    hideClass: 'f-fadeOut',

    Images: {
      zoom: false,
    },

    // Thumbs: {
    //   type: 'classic',
    // },

    Toolbar: {
      parentEl: (toolbar) => {
        return toolbar.instance.container.querySelector('.fancybox__col');
      },
      items: {
        sidebar: {
          tpl: `<button class="f-button"><svg><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></button>`,
          click: (toolbar) => {
            toolbar.instance.container.classList.toggle('has-sidebar');
          },
        },
      },
      display: {
        left: ['infobar'],
        middle: [],
        right: ['sidebar', 'thumbs', 'close'],
      },
    },

    on: {
      'Carousel.ready Carousel.change': (fancybox) => {
        const nameVal = fancybox.getSlide().triggerEl.dataset.name;
        const nameEl = document.getElementById('fancybox_name');

        if (nameEl) {
          nameEl.innerHTML = nameVal;
        }

        const characterVal = fancybox.getSlide().triggerEl.dataset.character;
        const characterEl = document.getElementById('fancybox_character');

        if (characterEl) {
          characterEl.innerHTML = characterVal;
        }
      },
    },
  });
};

export { fancyBoxDefault, fancyBoxCredit };
