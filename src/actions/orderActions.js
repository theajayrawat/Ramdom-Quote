// src/actions/orderActions.js
export const fetchOrders = () => {
  // Implement fetching orders from the server or API
  return async (dispatch) => {
    // Example code: Fetching orders from a hypothetical API endpoint
    try {
      const response = await fetch('/api/orders');
      const orders = await response.json();
      dispatch({ type: 'FETCH_ORDERS', payload: orders });
    } catch (error) {
      console.error(error);
    }
  };
};

export const viewOrderDetail = (orderId) => {
  return {
    type: 'VIEW_ORDER_DETAIL',
    payload: orderId,
  };
};
