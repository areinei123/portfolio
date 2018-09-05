import React from 'react'

const Icon = ({isOpen, theme, onMenuClick, onThemeClick}) => {
  let iconWrapper = {
    position: 'relative'
  }

  let iconStyle = {
    width: '135px',
    cursor: 'pointer'
  }

  let selectThemeStyle = {
    position: 'absolute',
    marginTop: '-10px',
    background: 'white',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '151px'
  }

  // let timeOut 

  // const holdYourHorses = async () => {
  //   timeOut = new Promise(resolve => setTimeout(resolve, 1000))
  //   await timeOut
  //   timeOut = undefined
  //   onMouseOut()
  // }

  const onThemeSelect = (event) => {
    onThemeClick(event.target.value)
  }

  // const hoverOverIcon = () => {
  //   timeOut = undefined
  //   onMouseOver()
  // }

  return (
    <div onClick={onMenuClick}>
      <img style={iconStyle} src='../images/dark-logo.png' />
      {isOpen &&
        <div style={selectThemeStyle}>
          <div onClick={() => onThemeClick('light')}>Light</div>
          <div onClick={() => onThemeClick('dark')}>Dark</div>
          <div onClick={() => onThemeClick('overdrive')}>EPIC</div>
        </div>
      }
    </div>
  )
}

export default Icon
