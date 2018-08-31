import {combineReducers} from 'redux'
import theme from './theme.js'
import navigation from './navigation.js'

export default combineReducers({
  theme,
  navigation
})