import { combineReducers } from 'redux';

import {
  FEATURE_INGREDIENT_NAME,
  FEATURE_PIZZA_NAME,
  FEATURE_SAUCE_NAME,
} from '../constants';

import ingredientReducers from './ingredient/ingredient.reducers';
import pizzaReducers from './pizza/pizza.reducers';
import sauceReducers from './sauce/sauce.reducers';

export default combineReducers({
  [FEATURE_INGREDIENT_NAME]: ingredientReducers,
  [FEATURE_PIZZA_NAME]: pizzaReducers,
  [FEATURE_SAUCE_NAME]: sauceReducers,
});
