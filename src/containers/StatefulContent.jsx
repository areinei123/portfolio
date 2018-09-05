import React from 'react'
import {connect} from 'react-redux'
import Content from '../components/Content.jsx'

const mapStateToProps = (state, ownProps) => ({
  page: state.navigation,
  theme: state.theme
})

// const mapDispatchToProps = (dispatch, ownProps) => ({
  
// })

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Content)
