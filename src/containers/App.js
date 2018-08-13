import React, {Fragment} from 'react'
import Navigation from '../components/Navigation.jsx'
import Content from '../components/Content.jsx'

// let store

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      page: 'home'
    }

    // store = createStore(
		// 	appStore
		// , state
		// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		// )
    this.onNavigate = this.onNavigate.bind(this)
  }

  onNavigate(page){
    this.setState({page: page})
  }

  render(){
    return (
      <Fragment>
        <Navigation onNavigate={this.onNavigate}></Navigation>
        <Content page={this.state.page}></Content>
      </Fragment>
    )
  }
}

export default App
