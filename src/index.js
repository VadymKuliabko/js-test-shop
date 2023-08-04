import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const instruments = [
  {
    id: 1,
    img: 'https://static.dnipro-m.ua/cache/products/4376/catalog_origin_257620.jpg',
    name: 'Шуруповерт',
    price: 1614,
    description:
      'Акумуляторний дриль-шуруповерт Dnipro-M CD-12Q має високу ефективність при виконання широкого спектра завдань.',
  },

  {
    id: 2,
    img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_262272.jpg',
    name: 'Перфоратор',
    price: 3948,
    description:
      'Перфоратор бочковий Dnipro-M ВН-20 використовується для виконання широкого спектру будівельних і ремонтних робіт: буріння та свердління отворів, розмішування будівельних сумішей, демонтажу і т.д.',
  },

  {
    id: 3,
    img: 'https://static.dnipro-m.ua/cache/products/7821/catalog_origin_275682.jpg',
    name: 'Акумуляторна газонокосарка ',
    price: 9300,
    description:
      'Компактна та легка акумуляторна газонокосарка DLM-200BC Dual призначена для швидкого та якісного скошування трави, догляду за газоном та парковими зонами, акуратного обкошування предметів ландшафтного дизайну та збору трави.',
  },

  {
    id: 4,
    img: 'https://static.dnipro-m.ua/cache/products/5683/catalog_origin_270008.jpg',
    name: 'Бензопила',
    price: 4896,
    description:
      'Ланцюгова бензопила Dnipro-М DSG-52H підходить для догляду за ділянкою з великою садибою та постійних робіт у великому господарстві – понад 15 соток.',
  },
  {
    id: 5,
    img: 'https://static.dnipro-m.ua/cache/products/2801/catalog_origin_261339.jpg',
    name: 'Викрутка',
    price: 180,
    description:
      'Головною особливістю викрутки Dnipro-M є наявність спеціального адаптера для біт, який можна використовувати в якості торцевої головки з розмірами 6 і 8 мм. Викрутка, виготовлена з високоякісної сталі марки S2, дозволяє працювати максимально комфортно завдяки двокомпонентній прогумованій ручці.',
  },
  {
    id: 6,
    img: 'https://static.dnipro-m.ua/cache/products/2747/catalog_origin_271837.jpg',
    name: 'Генератор',
    price: 34650,
    description:
      'Генератор потужністю 7 кВт, якої вистачить для освітлення великого приватного будинку, а також одночасного підключення: до 12 побутових електроприладів в залежності від пускової потужності, або ж до 6-ти одиниць електроінструменту.',
  },
  {
    id: 7,
    img: 'https://static.dnipro-m.ua/cache/products/2301/catalog_origin_261042.jpg',
    name: 'Рівень',
    price: 747,
    description:
      'Будівельний рівень DNIPRO-M ProVision 600 мм має безліч переваг. Серед них чудова ергономіка, високий рівень захисту від ударів, велика точність вимірювань і багато іншого.',
  },
];

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

const favoriteArr = [];
const basketArr = [];
const KEY_FAVORITE = 'favorite';
const KEY_BASKET = 'basket';

function createMarkup(arr) {
  const markup = arr
    .map(
      ({ id, img, name }) => `<li data-id="${id}" class="js-card">
        <img src="${img}" alt="${name}" width="300">
        <h2>${name}</h2>
        <p ><a class="js-info" href="#">More information</a></p>
        <div>
          <button class="js-favorite">Add to favorite</button>
          <button class="js-basket">Add to basket</button>
        </div>
      </li>`
    )
    .join('');

  list.innerHTML = markup;
}

list.addEventListener('click', onClickInfo);

function onClickInfo(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target);
    const instance = basicLightbox.create(`
	 <div class="modal">
        <img class="modal-img" src="${product.img}" alt="${product.name}" width="300" />
        <h2>${product.name}</h2>
        <h3>${product.price} грн</h3>
        <p>${product.description}</p>
          <div>
          <button class="js-favorite">Add to favorite</button>
          <button class="js-basket">Add to basket</button>
        </div>
      </div>
`);
    instance.show();
  }

  if (evt.target.classList.contains('js-basket')) {
    const product = findProduct(evt.target);
    console.log(product);
    basketArr.push(product);
    localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
  }

  if (evt.target.classList.contains('js-favorite')) {
    const product = findProduct(evt.target);
    favoriteArr.push(product);
    localStorage.setItem(KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
}

createMarkup(instruments);

function findProduct(elem) {
  const productId = Number(elem.closest('.js-card').dataset.id);
  return instruments.find(({ id }) => id === productId);
}
