import {useRef} from 'react'
import Landing from './Components/Landing'
import Bmi_cal from './Components/Bmi_cal'

function App() {

  const targetRef = useRef(null);

  return (
    <>
      <Landing />
      <Bmi_cal targetRef={targetRef} />
    </>
  )
}

export default App
