import React from 'react'
import {Constants} from '../style/constants.js'

const LeadImage = ({theme}) => {
  // let shading = {
  //   width: '100%',
  //   height: '100%',
  //   background: theme === 'light' ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)',
  //   position: 'absolute',
  //   top: '0',
  //   left: '0'
  // }

  let image = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundRepeat: "repeat",
    backgroundImage: 'url('+Constants[theme+'LeadImageUrl']+')'
  }

  let text = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    color: theme === 'light' ? 'black' : 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '26px'
  }

  let wrapper = {
    position: 'relative',
    height: '80%'
  }

  return(
    <div style={wrapper}>
      <div style={image}/>
      <span style={text}>I'm a header</span>
    </div>
  )
      // <div style={shading}/>
}

export default LeadImage 