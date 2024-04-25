/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Cinnamon roll</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Sanrio & Friends
      </p>
    </>
  )
}

export default App*/
//1)parte = Import
import './App.css'
//2)parte = Criação da função
function App(){
  return(
    <>
    <h1>What is Cinnamon Roll?</h1>
    <h2>Cinnamon Roll is a sanrio character</h2>
    </>
  )
}
//2)parte = Exportação
export default App