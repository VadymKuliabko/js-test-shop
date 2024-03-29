import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';

import { instruments } from './data/data';
import { onClickInfo } from './helpers/onClickInfo';

const list = document.querySelector('.js-list');

createMarkup(instruments, list);
list.addEventListener('click', onClickInfo);
