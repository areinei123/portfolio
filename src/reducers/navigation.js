const navigation = (state = window.location.pathname.slice(1) || 'home', action) => {
  switch(action.type){
    case 'NAVIGATE_TO_PAGE':
      return action.page
    default:
      return state
  }
}

export default navigation