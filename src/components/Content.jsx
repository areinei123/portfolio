import React from 'react'
import Home from '../components/Home.jsx'
import Resume from '../components/Resume.jsx'
import Projects from '../components/Projects.jsx'
import Blog from '../components/Blog.jsx'
import Themes from '../style/constants.js'

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
        <div style={Themes.contentSpacing}>
          <Resume/>
        </div>
      )
    case 'projects':
      return (
        <div style={Themes.contentSpacing}>
          <Projects/>
        </div>
      )
    case 'blog':
      return (
        <div style={Themes.contentSpacing}>
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
