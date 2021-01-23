import * as orderAT from './order.action-types';

// Action Creators
export const postOrder = (value) => ({
  type: orderAT.POST_ORDER,
  payload: value,
});

// Actions (to be used by epic)
export const fetchSauces = {
  type: orderAT.FETCH_ORDER,
  endpoint: 'http://localhost:3333/api/order',
  onSuccess: postOrder,
};

export const addPizza = (value) => ({
  type: orderAT.ADD_PIZZA,
  payload: value,
});

export const addSauce = (value) => ({
  type: orderAT.ADD_SAUCE,
  payload: value,
});
