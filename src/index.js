import React from 'react';
import ReactDOM from 'react-dom';
import 'moment/locale/zh-cn';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createHashHistory } from 'history';

// 引入redux-persist
import { PersistGate } from 'redux-persist/lib/integration/react';

// 引入默认全局样式
import '@alifd/next/reset.scss';
import '@alifd/theme-zgcw-pc/variables.scss'; // 引入主题变量
import './sass/app.scss';
// 引入样式全局变量


// 引入基础配置文件
import router from './router';
import configureStore from './configureStore';
import LanguageProvider from './components/LocaleProvider';
import { getLocale } from './utils/locale';

export const history = createHashHistory();
export const { store, persistor } = configureStore(history);
const locale = getLocale() || 'zh-CN'; // TODO 强制取中文语言
const ICE_CONTAINER = document.getElementById('ice-container');

if (!ICE_CONTAINER) {
  throw new Error('当前页面不存在 <div id="ice-container"></div> 节点.');
}

ReactDOM.render(
  <LanguageProvider locale={locale}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>{router()}</ConnectedRouter>
      </PersistGate>
    </Provider>
  </LanguageProvider>,
  ICE_CONTAINER
);
