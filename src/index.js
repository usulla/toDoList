import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './components/App'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { rootReducer } from './store/rootReducer'
import { STORAGE_KEY } from './store/types'
import * as serviceWorker from './serviceWorker'

const store = createStore(rootReducer,
  compose(applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
/* Save to LocaStorage */
store.subscribe(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState().lists.lists))
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
