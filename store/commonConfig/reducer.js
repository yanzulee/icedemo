import {  PIC_PREFIX } from "./constants";

// The initial state
const initialState = {};

function configReducer(state = initialState, {type, payload}) {
  switch (type) {
    case PIC_PREFIX: 
    return {...state,
    prefix: payload.prefix};
    default:
      return state;
  }
}

export default configReducer;
