import React from 'react'
import Home from './Home.jsx'
import Resume from './Resume.jsx'
import Projects from './Projects.jsx'
import Blog from './Blog.jsx'

const Content = (page) => {
  const pageRouter = () => {
    switch(page){
      case 'home':
        return <Home/>
      case 'resume':
        return <Resume/>  
      case 'projects':
        return <Projects/>
      case 'blog':
        return <Blog/>
    }
  }

  return (
    <div>
      {pageRouter()}
    </div>
  )
}

export default Content
