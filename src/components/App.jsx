import React, {Fragment} from 'react'
import Navigation from '../components/Navigation.jsx'
import StatefulContent from '../containers/StatefulContent.jsx'
import ErrorBoundary from '../containers/ErrorBoundary.js'
import Footer from '../components/Footer.jsx'
import {Themes} from '../style/constants.js'

const App = ({theme}) => {
  
  let framework = Themes[theme].font

  return (
    <div style={framework}>
      <ErrorBoundary>
        <Navigation theme={theme}/>
        <StatefulContent/>
        <Footer theme={theme}/>
      </ErrorBoundary>
    </div>
  )
}

export default App
