export function addProduct(title) {
  return { type: 'ADD_PRODUCT', product: { id: Date.now(), title, count: 1 } };
}

export function increaseCount(id) {
  return { type: 'INCREASE_COUNT', id };
}

export function decreaseCount(id) {
  return { type: 'DECREASE_COUNT', id };
}
