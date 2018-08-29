import React from 'react'

const LeadImage = ({}) => {
  let shading = {
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: '0',
    left: '0'
  }

  let image = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0'
  }

  let text = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    color: 'white',
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
      <img style={image}
        src='http://gravitatecreative.com/wp-content/uploads/2016/03/Importance-of-Background-Design-pic.jpg'/>
      <div style={shading}/>
      <span style={text}>I'm a header</span>
    </div>
  )
}

export default LeadImage 