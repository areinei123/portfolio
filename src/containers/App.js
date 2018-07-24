import React from 'react'
import Navigation from '../components/Navigation.jsx'
import Content from '../components/Content.jsx'

// let store

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}

    // store = createStore(
		// 	appStore
		// , state
		// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		// )
  }

  render(){
    return (
      <React.Fragment>
        <Navigation/>
        <Content/>
      </React.Fragment>
    )
  }
}

export default App
