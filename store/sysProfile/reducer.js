/*
 *
 * sysProfile reducer
 *
 */

import {
  TYPE_CURRENT_MARKET,
  TYPE_MARKET_LIST,
  TYPE_CURRENT_PROVINCE,
  TYPE_CURRENT_DISTRICT,
  TYPE_DISTRICT_LIST,
  CACHE_EMPLOYEE_LIST,
  SYS_LAST_OPERATION_TIME,
} from './constants';

// 获取市场
function marketListReducer(state = [], action) {
  switch (action.type) {
    case TYPE_MARKET_LIST:
      return action.data || [];
    default:
      return state;
  }
}

// 选择市场
function marketDataReducer(state = {}, action) {
  switch (action.type) {
    case TYPE_CURRENT_MARKET:
      return action.data;
    default:
      return state;
  }
}

// 选择省份
function provinceDataReducer(state = {}, action) {
  switch (action.type) {
    case TYPE_CURRENT_PROVINCE:
      return action.data;
    default:
      return state;
  }
}

// 获取地区
function districtListReducer(state = [], action) {
  switch (action.type) {
    case TYPE_DISTRICT_LIST:
      return action.data || [];
    default:
      return state;
  }
}

// 当前地区
function districtDataReducer(state = {}, action) {
  switch (action.type) {
    case TYPE_CURRENT_DISTRICT:
      return action.data || {};
    default:
      return state;
  }
}

// 缓存员工
function cacheEmployeeListReducer(state = [], action) {
  switch (action.type) {
    case CACHE_EMPLOYEE_LIST:
      return action.data || [];
    default:
      return state;
  }
}

// 更新最后操作
function updateLastOperationReducer(state = { time: '' }, action) {
  switch (action.type) {
    case SYS_LAST_OPERATION_TIME:
      return Object.assign({}, state, {
        time: action.data || '',
      });
    default:
      return state;
  }
}

export { marketListReducer, marketDataReducer, provinceDataReducer, districtListReducer, districtDataReducer, cacheEmployeeListReducer, updateLastOperationReducer };
