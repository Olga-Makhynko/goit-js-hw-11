import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  waitForImagesToLoad,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.warning({
      message: 'Please enter a search term.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.info({
          message: `Sorry, there are no images matching "${query}". Please try again!`,
          position: 'topRight',
        });
        throw new Error('No images found');
      }

      createGallery(images);
      return waitForImagesToLoad();
    })
    .catch(error => {
      if (error.message !== 'No images found') {
        iziToast.error({
          message: 'Something went wrong. Please try again later.',
          position: 'topRight',
        });
      }
    })
    .finally(() => {
      hideLoader();
    });
});
