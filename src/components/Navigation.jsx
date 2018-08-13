import React from 'react'
import Link from './Link.jsx'
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
      <Link label='Home' href='home' onClick={onNavigate}/>
      <Link label='Resume' href='resume' onClick={onNavigate}/>
      <Icon />
      <Link label='Projects' href='projects' onClick={onNavigate}/>
      <Link label='Blog' href='blog' onClick={onNavigate}/>
    </div>
  )
}

export default Navigation
