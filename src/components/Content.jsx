import React from 'react'
import Home from '../components/Home.jsx'
import Resume from '../components/Resume.jsx'
import Projects from '../components/Projects.jsx'
import Blog from '../components/Blog.jsx'
import {Themes} from '../style/constants.js'

const Content = ({page, theme}) => {
  let homeStyle = {
    margin: '5px'
  }

  switch(page){
    case 'home':
      return (
        <div>
          <Home theme={theme}/>
        </div>
      )
    case 'resume':
      return (
        <div style={Themes[theme].contentSpacing}>
          <Resume/>
        </div>
      )
    case 'projects':
      return (
        <div style={Themes[theme].contentSpacing}>
          <Projects/>
        </div>
      )
    case 'blog':
      return (
        <div style={Themes[theme].contentSpacing}>
          <Blog/>
        </div>
      )
    default:
      return (
        <div>
          <Home theme={theme}/>
        </div>
      )
  }
}

export default Content
