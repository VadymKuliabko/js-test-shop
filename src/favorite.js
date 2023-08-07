import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { findProduct } from './helpers/findProduct';
import { instruments } from './data/data';
import { onClickInfo } from './helpers/onClickInfo';

const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) || [];

createMarkup(favorite, list);
list.addEventListener('click', onClickInfo);

findProduct(evt.target, instruments);
