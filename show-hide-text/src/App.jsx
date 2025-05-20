import { useState } from 'react'
import "./App.css"
function App() {
   const [show, setShow] = useState(true);

  return (
 <>
   <h1>Show/Hide Text</h1>
   <button onClick={() => setShow((show) => !show)}> Show / Hide</button>
      {show ? <h1>Welcome to React Challenges</h1> : null}
 </>
  )
}

export default App
