import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const galleryEl = document.querySelector('.gallery');

form.addEventListener('submit', e => {
  e.preventDefault();
  const searchValue = e.currentTarget.elements['search-text'].value.trim();

  if (!searchValue) {
    iziToast.warning({
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchValue)
    .then(images => {
      hideLoader();
      if (images.length === 0) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(images);
    })
    .catch(error => {
      hideLoader();
      console.error(error);
      iziToast.error({
        message: 'Something went wrong. Please try again later!',
        position: 'topRight',
      });
    });
});
