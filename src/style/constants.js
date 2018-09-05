import React from 'react'

export const Constants = {
  darkBackground: 'black',
  lightBackground: 'white',
  lightFont: "Tajawal",
  darkFont: "Stylish",
  overdriveFont: "Acme",
  lightLeadImageUrl: '../images/paisley.png',
  darkLeadImageUrl: '../images/connectwork.png',
  overdriveLeadImageUrl: '',
}

export const Themes = {
  light: {
    contentSpacing: {
      padding: '20px',
      margin: '15%',
      minHeight: '100%',
      backgroundColor: Constants.lightBackground
    },
    font: {
      fontFamily: Constants.lightFont
    }
  },
  dark: {
    contentSpacing: {
      padding: '20px',
      margin: '15%',
      minHeight: '100%',
      backgroundColor: Constants.darkBackground
    },
    font: {
      fontFamily: Constants.darkFont
    }
  },
  overdrive: {
    contentSpacing: {
      padding: '20px',
      margin: '15%',
      minHeight: '100%',
      backgroundColor: Constants.overdriveBackground
    },
    font: {
      fontFamily: Constants.overdriveFont
    }
  }
}
