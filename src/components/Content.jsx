import React from 'react'
import Home from './Home.jsx'
import Resume from './Resume.jsx'
import Projects from './Projects.jsx'
import Blog from './Blog.jsx'
import Constants from '../style/constants.js'

const Content = ({page}) => {
  let homeStyle = {
    margin: '5px'
  }

  switch(page){
    case 'home':
      return (
        <div>
          <Home/>
        </div>
      )
    case 'resume':
      return (
        <div style={Constants.contentSpacing}>
          <Resume/>
        </div>
      )
    case 'projects':
      return (
        <div style={Constants.contentSpacing}>
          <Projects/>
        </div>
      )
    case 'blog':
      return (
        <div style={Constants.contentSpacing}>
          <Blog/>
        </div>
      )
    default:
      return (
        <div>
          <Home/>
        </div>
      )
  }
}

export default Content
