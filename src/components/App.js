import React, {Fragment} from 'react'
import Navigation from '../components/Navigation.jsx'
import StatefulContent from '../containers/StatefulContent.jsx'
import ErrorBoundary from '../containers/ErrorBoundary.js'
import Footer from '../components/Footer.jsx'

const App = ({}) => {
  return (
    <ErrorBoundary>
      <Navigation/>
      <StatefulContent/>
      <Footer/>
    </ErrorBoundary>
  )
}

export default App
