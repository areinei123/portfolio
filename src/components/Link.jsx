import React from 'react'
import PropTypes from 'prop-types'

const Link = ({label, href, onClick}) => {
  let style = {
    color: '#e3e3e8',
    textDecoration: 'none'
  }

  const onLinkClick = (event) => {
    event.preventDefault
    console.log(href)
    onClick(href)
  }

  return (
    <a
      href={href}
      style={style}
      onClick={onLinkClick}
    >
      {label}
    </a>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
