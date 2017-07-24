import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer, initialState } from './reducers';
import loggingMiddleware from './middleware/loggingMiddleware.js';

export const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        loggingMiddleware,
      ),
    ),
  );

  return store;
}

export default configureStore;
