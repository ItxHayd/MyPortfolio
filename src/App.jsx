import React from 'react'
import ScrollPage from './components/ScrollPage.jsx'
import TransitionScene from './Starfield.jsx'
import Starfield from './Starfield.jsx'
import Page from './Page.jsx'
import ClickEffects from './components/ui/ClickEffects.jsx'

const App = () => {
  return (
    <>
      <Starfield/>
      <ClickEffects/>
      <ScrollPage/>
    </>
  )
}

export default App