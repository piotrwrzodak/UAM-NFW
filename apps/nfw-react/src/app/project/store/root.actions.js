import * as rootAT from './root.action-types';

// Actions
export const initialize = { type: rootAT.INITIALIZE };
export const submit = (data) => ({ type: rootAT.SUBMIT, data });
