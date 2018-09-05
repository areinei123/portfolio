import React from 'react'
import LeadImage from './LeadImage.jsx'
import AboutMe from './AboutMe.jsx'

const Home = ({theme}) => {
  return (
    <div>
      <LeadImage theme={theme}/>
      <AboutMe theme={theme}/>
    </div>
  )
}

export default Home