// src/actions/cartActions.js
export const addToCart = (book) => {
  return {
    type: 'ADD_TO_CART',
    payload: book,
  };
};

export const removeFromCart = (bookId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: bookId,
  };
};

export const checkout = () => {
  return {
    type: 'CHECKOUT',
  };
};
