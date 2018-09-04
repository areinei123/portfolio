import React from 'react'
import NavigationLink from '../containers/NavigationLink.jsx'
import StatefulIcon from '../containers/StatefulIcon.jsx'

const Navigation = ({}) => {
  let style = {
    height: '75px',
    backgroundColor: 'hsl(240, 10%, 25%)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
    zIndex: 3
  }

  return (
    <div style={style}>
      <NavigationLink label='Home' href='home'/>
      <NavigationLink label='Resume' href='resume'/>
      <StatefulIcon />
      <NavigationLink label='Projects' href='projects'/>
      <NavigationLink label='Blog' href='blog'/>
    </div>
  )
}

export default Navigation
