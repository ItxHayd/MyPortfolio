import React from 'react'
import ScrollPage from './ScrollPage.jsx'
import Starfield from './Starfield.jsx'
import ClickEffects from './components/ui/ClickEffects.jsx'
import { useState } from 'react'
import IntroAnimation from './components/ui/IntroAnimation.jsx'

const App = () => {
  window.history.scrollRestoration = "manual";

  const [introsDone, setIntroDone] = useState(false);
  return (
    <>
     {!introsDone && <IntroAnimation onComplete={() => setIntroDone(true)} />}
      <Starfield/>
      <ClickEffects/>
      <ScrollPage/>
    </>
  )
}

export default App