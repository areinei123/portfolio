import React from 'react'
import Link from './Link.jsx'
import Icon from './Icon.jsx'

const Navigation = () => {
  let style = {
    height: '50px',
    backgroundColor: 'hsl(240, 10%, 25%)',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  return (
    <div style={style}>
      <Link label='Home'/>
      <Link label='Resume'/>
      <Icon />
      <Link label='Projects'/>
      <Link label='Blog'/>
    </div>
  )
}

export default Navigation
