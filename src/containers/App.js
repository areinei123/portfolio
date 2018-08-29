import React, {Fragment} from 'react'
import Navigation from '../components/Navigation.jsx'
import Content from '../components/Content.jsx'
import ErrorBoundary from './ErrorBoundary.js'
import Footer from '../components/Footer.jsx'

// let store

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      page: window.location.pathname.slice(1) || 'home'
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
        <ErrorBoundary>
          <Navigation onNavigate={this.onNavigate}></Navigation>
          <Content page={this.state.page}></Content>
          <Footer/>
        </ErrorBoundary>
      </Fragment>
    )
  }
}

export default App
