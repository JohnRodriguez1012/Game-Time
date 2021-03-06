import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './Components/Hangman/reducers'
const reducer = combineReducers(reducers)

const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f

const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
)

const store = createStore(reducer, enhancer)

export default store
