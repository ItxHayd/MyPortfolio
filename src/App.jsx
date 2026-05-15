import React from 'react'
import ScrollAnimation from './components/ScrollAnimation.jsx'
import TransitionScene from './Starfield.jsx'
import Starfield from './Starfield.jsx'
import Page from './Page.jsx'

const App = () => {
  return (
    <>
      <Starfield/>
      
     {/* <div className=" flex justify-center content-center">
        <div className=" border-amber-900 p-5 mt-12 mb-12 max-w-10/12 border-2 rounded-2xl"> */}
        <ScrollAnimation/>
        {/* </div>
      </div> */}
    </>
  )
}

export default App