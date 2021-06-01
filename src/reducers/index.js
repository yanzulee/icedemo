/*
 *
 * sysProfile reducer
 *
 */

import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
// 引入reducer
// import {
//   marketListReducer,
//   marketDataReducer,
//   provinceDataReducer,
//   districtListReducer,
//   districtDataReducer,
//   cacheEmployeeListReducer,
//   updateLastOperationReducer,
// } from '../store/sysProfile/reducer';
// import loginReducer from '../pages/UserLogin/reducer';
// import profileReducer from '../store/userProfile/reducer';
// import configReducer from '../store/commonConfig/reducer'
// import {
//   optionTransferNumbReducer,
//   transferPrintInvoiceNumbReducer,
//   transferPrintServiceNumbReducer,
//   transferPrintYinhuaNumbReducer,
// } from '../store/transferProfile/reducer';

// 路由reducer
function routeReducer(state = { location: null }, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return Object.assign({}, state, { location: action.payload });
    default:
      return state;
  }
}

export default function createReducer() {
  return combineReducers({
    route: routeReducer,
    // profile: profileReducer,
    // config: configReducer,
    // login: loginReducer,
    // marketData: marketDataReducer,
    // marketList: marketListReducer,
    // provinceData: provinceDataReducer,
    // districtData: districtDataReducer,
    // districtList: districtListReducer,
    // transferOptData: optionTransferNumbReducer,
    // transferPrintInvoiceNumb: transferPrintInvoiceNumbReducer,
    // transferPrintServiceNumb: transferPrintServiceNumbReducer,
    // transferPrintYinhuaNumb: transferPrintYinhuaNumbReducer,
    // cacheEmployeeList: cacheEmployeeListReducer,
    // lastOperation: updateLastOperationReducer,
  });
}
