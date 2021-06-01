/*
 *
 * transProfile reducer
 *
 */

import {
  TRANSFER_OPT_NUMBER,
  TRANSFER_INVOICE_NUMBER,
  TRANSFER_SERVICE_NUMBER,
  TRANSFER_YINHUA_NUMBER,
} from './constants';

// 选择当前过户窗口
function optionTransferNumbReducer(state = '', action) {
  switch (action.type) {
    case TRANSFER_OPT_NUMBER:
      return action.data;
    default:
      return state;
  }
}

// 当前过户打印发票号
function transferPrintInvoiceNumbReducer(state = '', action) {
  switch (action.type) {
    case TRANSFER_INVOICE_NUMBER:
      return action.data;
    default:
      return state;
  }
}

// 当前过户服务费发票号
function transferPrintServiceNumbReducer(state = '', action) {
  switch (action.type) {
    case TRANSFER_SERVICE_NUMBER:
      return action.data;
    default:
      return state;
  }
}

// 当前过户印花税票号
function transferPrintYinhuaNumbReducer(state = '', action) {
  switch (action.type) {
    case TRANSFER_YINHUA_NUMBER:
      return action.data;
    default:
      return state;
  }
}

export {
  optionTransferNumbReducer,
  transferPrintInvoiceNumbReducer,
  transferPrintServiceNumbReducer,
  transferPrintYinhuaNumbReducer,
};
