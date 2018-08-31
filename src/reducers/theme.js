import {themeTypes} from '../actions/theme.js'

const theme = (state = themeTypes.light, action) => {
  switch(action.type){
    case 'CHANGE_THEME':
      return action.theme
    default:
      return state
  }
}

export default theme