import React from 'react'

const Link = ({label}) => {
  let style = {
    color: '#e3e3e8',
    textDecoration: 'none'
  }

  return (
    <a
      href=''
      style={style}
    >
      {label}
    </a>
  )
}

export default Link
