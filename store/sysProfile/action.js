/*
 *
 * sysProfile actions
 *
 */

import request from '../../api';
import {
  TYPE_CURRENT_MARKET,
  TYPE_MARKET_LIST,
  TYPE_CURRENT_DISTRICT,
  TYPE_DISTRICT_LIST,
  SYS_REFRESH_TOKEN,
  CACHE_EMPLOYEE_LIST,
  SYS_LAST_OPERATION_TIME,
} from './constants';

// 刷新token
export const refreshToken = (data) => {
  return {
    type: SYS_REFRESH_TOKEN,
    data,
  };
};

// 更新最后操作时间
export const updateLastOperationTime = (data) => {
  return {
    type: SYS_LAST_OPERATION_TIME,
    data,
  };
};

// 更新当前查询市场选择的省份
export const selectDistrict = (data) => {
  return {
    type: TYPE_CURRENT_DISTRICT,
    data,
  };
};

// 更新当前市场
export const selectMarket = (data) => {
  return {
    type: TYPE_CURRENT_MARKET,
    data,
  };
};

// 获取市场选择列表
export const requestMarketList = (state, params) => {
  return async (dispatch) => {
    if (state === 'logout') {
      dispatch({ type: TYPE_MARKET_LIST, data: [] });
    } else {
      params = params || {};
      request({ url: '/market/list', server: 'market', method: 'get', params }).then((res) => {
        dispatch({ type: TYPE_MARKET_LIST, data: res.list });
      }).catch((error) => {
        console.log(error);
      });
    }
  };
};

// 获取城市
export const requestDistrictList = () => {
  return async (dispatch) => {
    request({ url: '/district/all', server: 'market', method: 'get' }).then((res) => {
      dispatch({ type: TYPE_DISTRICT_LIST, data: res });
    }).catch((error) => {
      console.log(error);
    });
  };
};

// 缓存员工数据
export const updateCacheEmployee = (data) => {
  return {
    type: CACHE_EMPLOYEE_LIST,
    data,
  };
};
