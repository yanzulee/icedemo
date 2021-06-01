import React, { Component } from 'react';
import Lo_get from 'lodash/get';
import { Redirect, Switch, Route } from 'react-router-dom';

import NotFound from '../../components/NotFound';
import Authorized from '../../utils/Authorized';
import LayoutRouterMenuHoc from '../../utils/LayoutRouterMenuHoc';
import { store } from '../../index';

const { AuthorizedRoute } = Authorized;

@LayoutRouterMenuHoc
class MainRoutes extends Component {
  static displayName = 'MainRoutes';
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * 根据菜单取得重定向地址.
   */
  getRedirectData = () => {
    const { asideMenuConfig } = this.props;
    const redirectData = [];
    const getRedirect = (item) => {
      if (item && item.children) {
        if (item.children[0] && item.children[0].path) {
          redirectData.push({
            from: `${item.path}`,
            to: `${item.children[0].path}`,
          });
          item.children.forEach((children) => {
            getRedirect(children);
          });
        }
      }
    };
    asideMenuConfig.forEach(getRedirect);
    // console.info(redirectData)
    return redirectData;
  };

  /**
   * 渲染权限路由组件
   */
  renderAuth = () => {
    const { routerData } = this.props;
    return routerData.map(this.renderAuthorizedRoute);
  };

  renderAuthorizedRoute = (item, index) => {
    return item.component ? (
      <AuthorizedRoute
        key={index}
        path={item.path}
        component={item.component}
        exact={item.exact}
        authority={item.authority}
        redirectPath="/exception/403"
      />
    ) : null;
  };

  render () {
    const redirectData = this.getRedirectData();

    return (
      <Switch>
        {/* 渲染权限路由表 */}

        {this.renderAuth()}

        {/* 路由重定向，嵌套路由默认重定向到当前菜单的第一个路由 */}
        {redirectData.map((item, index) => {
          return <Redirect key={index} exact from={item.from} to={item.to} />;
        })}

        {/* 首页默认重定向到 /home */}
        {Lo_get(store.getState(), 'login.isLogin', false) ? (
          <Redirect exact from="/" to="/home" />
        ) : (
            <Redirect exact from="/" to="/user/login" />
          )}

        {/* 未匹配到的路由重定向到 404 */}
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default MainRoutes;
