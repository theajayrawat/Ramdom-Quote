// src/reducers/orderReducer.js
const initialState = {
  orders: [],
  selectedOrder: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ORDERS':
      return {
        ...state,
        orders: action.payload,
      };
    case 'VIEW_ORDER_DETAIL':
      return {
        ...state,
        selectedOrder: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
