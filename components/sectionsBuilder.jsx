import React from 'react'
import Intro from './sections/intro.jsx'
import First from './sections/first.jsx'
import Second from './sections/second.jsx'
import GetStarted from './sections/getStarted.jsx'

const Sections = () => {
  return(
    <div id='main'>
      <Intro />
      <First />
      <Second />
      <GetStarted />
    </div>
 )
}

export default Sections
