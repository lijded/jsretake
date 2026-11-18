export const defaultState = [
  { id: 1, title: 'Велосипед', count: 5 },
  { id: 2, title: 'Самокат', count: 4 },
  { id: 3, title: 'Гантели', count: 7 },
  { id: 4, title: 'Ракетки', count: 1 }
];

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.product];
    case 'INCREASE_COUNT':
      return state.map(product => {
        if (product.id !== action.id || product.count === 25) return product;
        return { ...product, count: product.count + 1 };
      });
    case 'DECREASE_COUNT':
      return state.map(product => {
        if (product.id !== action.id) return product;
        return { ...product, count: product.count - 1 };
      }).filter(product => product.count > 0);
    default:
      return state;
  }
}
