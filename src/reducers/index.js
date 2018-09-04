import {combineReducers} from 'redux'
import theme from './theme.js'
import navigation from './navigation.js'
import display from './display.js'

export default combineReducers({
  theme,
  navigation,
  display
})