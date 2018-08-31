import React from 'react'
import Themes from '../style/constants.js'

const AboutMe = ({}) => {

  return (
      <div style={Themes.dark.contentSpacing}>
        <h1>who is fred chapman?</h1>
        <p>
          hey there, i'm fred, a programmer and ui/ux designer that's always looking for things
          to create and make better. i was born in england, brought to boston at the age of about six
          months, and grew up there. as of aug. 2018, i now live in austin, tx with 
          (borat voice) my wife! (/borat voice)
        </p>
        <p>
          i've had a lot of experiences in this thing called life: owned and built a restaurant,
          gone ice climbing, brewed my own beer, and adopted a crazy cat. but once i started programming,
          i realized that i wanted to immerse myself in design. 
        </p>
      </div>
  )
}

export default AboutMe
