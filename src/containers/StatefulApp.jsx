import React from 'react'
import {connect} from 'react-redux'
import App from '../components/App.jsx'

const mapStateToProps = (state, ownProps) => ({
  theme: state.theme
})

// const mapDispatchToProps = (dispatch, ownProps) => ({
  
// })

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(App)
