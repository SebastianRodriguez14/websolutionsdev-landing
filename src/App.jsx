import { useState } from 'react'
import './App.css'
import { LandingHeader } from './components/landing-header'
import { LandingPart01 } from './components/landing-part01'
import { LandingPart02 } from './components/landing-part02'
import { LandingPart03 } from './components/landing-part03'

function App() {
  const [count, setCount] = useState(0)



  return <>
    <LandingHeader />
    <LandingPart01 />
    <LandingPart02 />
    <LandingPart03 />

  </>
}

export default App
