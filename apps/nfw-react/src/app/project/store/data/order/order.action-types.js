import { FEATURE_ORDER_NAME } from '../../constants';

// Small tip to decorate each action type prefixing by it's feature name
const decorateAT = (text) => `[${FEATURE_ORDER_NAME}] ${text}`;

// Action Types
export const FETCH_ORDER = decorateAT('Fetch order');
export const POST_ORDER = decorateAT('Post order');
export const ADD_PIZZA = decorateAT('Add pizza');
export const DELETE_PIZZA = decorateAT('Delete pizza');
export const ADD_SAUCE = decorateAT('Add sauce');
export const DELETE_SAUCE = decorateAT('Delete sauce');
export const DELETE_ALL = decorateAT('Delete all');
