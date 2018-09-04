export function onHoverOverIcon(){
  return {
    type: 'HOVER_OVER_ICON',
    isHovered: true
  }
}

export function onHoverAwayIcon(){
  return {
    type: 'HOVER_AWAY_ICON',
    isHovered: false
  }
}

export function onClickMenu(){
  return {
    type: 'ON_CLICK_MENU'
  }
}