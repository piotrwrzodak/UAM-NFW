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
    case orderAT.ADD_SAUCE: {
      if (state.sauce.some((sauce) => sauce.id === action.payload.id)) {
        return {
          ...state,
          sauce: state.sauce.map((s) =>
            s.id === action.payload.id ? { ...s, count: s.count + 1 } : s
          ),
          total: state.total + action.payload.price,
        };
      } else {
        return Object.assign({}, state, {
          sauce: state.sauce.concat({
            id: action.payload.id,
            count: 1,
          }),
          total: state.total + action.payload.price,
        });
      }
    }

    default:
      return state;
  }
}
