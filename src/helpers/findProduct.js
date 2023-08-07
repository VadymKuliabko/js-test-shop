function findProduct(elem, arr) {
  const productId = Number(elem.closest('.js-card').dataset.id);
  return arr.find(({ id }) => id === productId);
}
export { findProduct };
