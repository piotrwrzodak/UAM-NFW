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
    case orderAT.DELETE_PIZZA: {
      return {
        ...state,
        pizza: deleteObject(state.pizza, action),
        total: state.total - action.payload.price,
      };
    }
    case orderAT.DELETE_SAUCE: {
      if (
        state.sauce.some(
          (sauce) => sauce.id === action.payload.id && sauce.count > 1
        )
      ) {
        return {
          ...state,
          sauce: state.sauce.map((s) =>
            s.id === action.payload.id ? { ...s, count: s.count - 1 } : s
          ),
          total: state.total - action.payload.price,
        };
      } else {
        return {
          ...state,
          sauce: deleteObject(state.sauce, action),
          total: state.total - action.payload.price,
        };
      }
    }
    default:
      return state;
  }
}

const deleteObject = (array, action) => {
  const index = array.map((e) => e.id).indexOf(action.payload.id);
  let newArray = array.slice();
  newArray.splice(index, 1);
  return newArray;
};
