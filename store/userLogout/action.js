/*
 *
 * userLogout actions
 *
 */

import { push } from 'react-router-redux';
import { Message } from '@alifd/next';
import { setAuthority, setRoleList } from '../../utils/authority';
import { reloadAuthorized } from '../../utils/Authorized';
import { requestMarketList, selectMarket, selectDistrict, updateCacheEmployee, updateLastOperationTime } from '../sysProfile/action';
import {
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_SUCCESS,
} from './constants';

const userLogoutRequest = () => {
  return {
    type: USER_LOGOUT_REQUEST,
    isLoading: true,
  };
};

const userLogoutSuccess = (payload) => {
  return {
    type: USER_LOGOUT_SUCCESS,
    isLoading: false,
    payload,
  };
};

const userLogoutFailure = (payload) => {
  return {
    type: USER_LOGOUT_FAILURE,
    isLoading: false,
    payload,
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    dispatch(userLogoutRequest());
    try {
      dispatch(userLogoutSuccess());
      Message.success('已登出');
      setAuthority(JSON.stringify([]));
      setRoleList(JSON.stringify([]));
      reloadAuthorized();
      dispatch(requestMarketList('logout'));
      dispatch(selectMarket({}));
      dispatch(selectDistrict({}));
      dispatch(updateCacheEmployee([]));
      dispatch(updateLastOperationTime());
      dispatch(push('/user/login'));
    } catch (error) {
      dispatch(userLogoutFailure(error));
    }
  };
};
