import { useState } from 'react'
import Cv from './Cv';
import './styles/App.css'

function App() {
  const [convertCv, setConvertCv] = useState(false);

  return (
    <>
      <Cv convertCv={convertCv} />
      <button id="convertCv-button" onClick={e => setConvertCv(!convertCv)}>{convertCv ? "Edit CV" : "Convert CV"}</button>
    </>
  )
}

export default App
