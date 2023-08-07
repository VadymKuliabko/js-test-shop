import { instruments } from '../data/data';
import { common } from '../common';
import { findProduct } from './findProduct';
import { createModal } from './createModal';

function onClickInfo(evt) {
  evt.preventDefault();

  const favoriteArr =
    JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) || [];
  const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) || [];

  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target, instruments);
    createModal(product);
  }

  if (evt.target.classList.contains('js-basket')) {
    const product = findProduct(evt.target, instruments);

    basketArr.push(product);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
  }

  if (evt.target.classList.contains('js-favorite')) {
    const product = findProduct(evt.target, instruments);
    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
    }

    favoriteArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
}

export { onClickInfo };
