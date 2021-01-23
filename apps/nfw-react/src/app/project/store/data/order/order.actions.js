import * as orderAT from './order.action-types';

export const postOrder = (value) => ({
  type: orderAT.POST_ORDER,
  payload: value,
});

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

export const deletePizza = (value) => ({
  type: orderAT.DELETE_PIZZA,
  payload: value,
});

export const deleteSauce = (value) => ({
  type: orderAT.DELETE_SAUCE,
  payload: value,
});
