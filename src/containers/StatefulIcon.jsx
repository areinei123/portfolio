import React from 'react'
import {connect} from 'react-redux'
import {changeTheme} from '../actions/theme.js'
import {onClickMenu} from '../actions/display.js'
import Icon from '../components/Icon.jsx'

const mapStateToProps = (state, ownProps) => ({
  theme: state.theme,
  isOpen: state.display.isOpen
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onMenuClick: () => dispatch(onClickMenu()),
  onThemeClick: (value) => dispatch(changeTheme(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Icon)
