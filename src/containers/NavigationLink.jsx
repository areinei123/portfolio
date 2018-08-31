import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {navigateToPage} from '../actions/navigation.js'
import Link from '../components/Link.jsx'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.label === state.page  
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(navigateToPage(ownProps.href))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
