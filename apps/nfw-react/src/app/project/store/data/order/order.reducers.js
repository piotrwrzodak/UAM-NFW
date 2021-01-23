import * as orderAT from './order.action-types';

const initialState = {
  pizza: [],
  sauce: [],
  total: 0,
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case orderAT.ADD_PIZZA: {
      return Object.assign({}, state, {
        pizza: state.pizza.concat({
          id: action.payload.id,
          ingredients: action.payload.ingredients,
        }),
        total: state.total + action.payload.price,
      });
    }

    default:
      return state;
  }
}
