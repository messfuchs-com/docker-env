import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers'
import { saveToLocalStorageMiddleware, loadStateFromLocalStorage } from './middleware';
import createSagaMiddleware from 'redux-saga';
import { watchAuth } from './sagas';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const persistedState = loadStateFromLocalStorage();
// console.log(persistedState);

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunkMiddleware, loggerMiddleware,
        saveToLocalStorageMiddleware,
        sagaMiddleware
    )
)

const store = createStore( rootReducer, persistedState, enhancer );

sagaMiddleware.run(watchAuth)

export default store;