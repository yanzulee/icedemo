/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

//
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';
import createReducer from './reducers';

const persistConfig = {
  key: 'store',
  storage,
};

// 配置store
export default function configureStore(history) {
  // Create the store with  middlewares
  // routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [thunk, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
  // build 命令默认 NODE_ENV = production.
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
      : compose;
  /* eslint-enable */

  const persistReducerObj = persistReducer(persistConfig, createReducer());

  const store = createStore(
    persistReducerObj,
    {},
    composeEnhancers(...enhancers)
  );

  const persistor = persistStore(store);

  // Extensions
  store.injectedReducers = {}; // Reducer registry
  //
  // // Make reducers hot reloadable, see http://mxs.is/googmo
  // if (module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     store.replaceReducer();
  //   });
  // }

  store.persistor = persistor;
  return { store, persistor };
}
