import React from 'react'
import NavigationLink from '../containers/NavigationLink.jsx'
import Icon from './Icon.jsx'

const Navigation = ({onNavigate}) => {
  let style = {
    height: '50px',
    backgroundColor: 'hsl(240, 10%, 25%)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  return (
    <div style={style}>
      <NavigationLink label='Home' href='home' onClick={onNavigate}/>
      <NavigationLink label='Resume' href='resume' onClick={onNavigate}/>
      <Icon />
      <NavigationLink label='Projects' href='projects' onClick={onNavigate}/>
      <NavigationLink label='Blog' href='blog' onClick={onNavigate}/>
    </div>
  )
}

export default Navigation
