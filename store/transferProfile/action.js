/*
 *
 * transProfile actions
 *
 */
import {
  TRANSFER_OPT_NUMBER,
  TRANSFER_INVOICE_NUMBER,
  TRANSFER_SERVICE_NUMBER,
  TRANSFER_YINHUA_NUMBER,
} from './constants';

// 更新当前过户窗口
export const optionTransferNumb = (data) => {
  return {
    type: TRANSFER_OPT_NUMBER,
    data,
  };
};

// 更新当前过户打印发票号
export const transferPrintInvoiceNumb = (data) => {
  console.log('进入')
  return {
    type: TRANSFER_INVOICE_NUMBER,
    data,
  };
};

// 更新当前过户增值税普通发票号
export const transferPrintServiceNumb = (data) => {
  return {
    type: TRANSFER_SERVICE_NUMBER,
    data,
  };
};

// 更新当前过户印花税票号
export const transferPrintYinhuaNumb = (data) => {
  return {
    type: TRANSFER_YINHUA_NUMBER,
    data,
  };
};
