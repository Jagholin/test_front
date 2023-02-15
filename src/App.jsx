import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import InputFields from './components/InputFields'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <InputFields />
    </div>
  )
}

export default App
