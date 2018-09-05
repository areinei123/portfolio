import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import StatefulApp from './containers/StatefulApp.jsx'
import { createStore } from 'redux'
import rootReducer from './reducers/index.js'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}><StatefulApp/></Provider>
  , document.getElementById('app')
)
