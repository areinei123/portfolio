import React from 'react'

const Constants = {
  darkBackground: 'black',
  lightBackground: 'white'
}

const Themes = {
  light: {
    contentSpacing: {
      padding: '20px',
      minHeight: '100%',
      backgroundColor: Constants.lightBackground
    }
  },
  dark: {
    contentSpacing: {
      padding: '20px',
      minHeight: '100%',
      backgroundColor: Constants.darkBackground
    }
  },
  overdrive: {
    contentSpacing: {
      padding: '20px',
      minHeight: '100%',
      backgroundColor: Constants.overdriveBackground
    }
  }
}

export default Themes