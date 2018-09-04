
const display = (
  state = {
    isHovered: false
  }, 
  action) => {
  switch(action.type){
    case 'HOVER_OVER_ICON':
      return Object.assign({}, state, {
        isHovered: action.isHovered
      })
    case 'HOVER_AWAY_ICON':
      return Object.assign({}, state, {
        isHovered: action.isHovered
      })
    case 'ON_CLICK_MENU':
      console.log('finished?')
      return Object.assign({}, state, {
        isOpen: !state.isOpen
      })
    default:
      return state
  }
}

export default display