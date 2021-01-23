import { connect } from 'react-redux';
import { compose } from 'redux';
import { initialize } from '../../store/root.actions';
import { selectIngredientsById } from '../../store/data/ingredient/ingredient.selectors';
import { selectPizzasById } from '../../store/data/pizza/pizza.selectors';
import { selectSaucesById } from '../../store/data/sauce/sauce.selectors';
import { addPizza } from '../../store/data/order/order.actions';
import App from './App.cmp';

const mapState = (state, ownProps) => ({
  ingredientsById: selectIngredientsById(state),
  pizzasById: selectPizzasById(state),
  saucesById: selectSaucesById(state),
});

const mapDispatch = (dispatch, ownProps) => ({
  init: () => dispatch(initialize),
  addPizzaToCart: (pizza) => dispatch(addPizza(pizza)),
});

// Enhance part
export default compose(connect(mapState, mapDispatch))(App);
