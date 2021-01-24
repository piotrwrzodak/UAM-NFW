import * as orderAT from './order.action-types';

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

export const postOrder = () => {
  return (dispatch, getState) => {
    dispatch(prepareOrder());
    const state = getState();
    submitOrder(state.data.order);
  };
};

const prepareOrder = () => ({
  type: orderAT.PREPARE_ORDER,
});

const submitOrder = (order) => {
  fetch('http://localhost:3333/api/order/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
