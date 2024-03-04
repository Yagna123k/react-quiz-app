import { useState } from 'react'
import Home from './components/Home'
import Question from './components/Question'
import Result from './components/Result'

function App() {
  const [state, setState] = useState(1)
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(0)
  return <>

    {
      state == 1 ? <Home setState={setState} /> : state == 2 ? <Question setState={setState} count={count} setCount={setCount} score={score} setScore={setScore}/> : <Result setState={setState} setCount={setCount} setScore={setScore} count={count} score={score}/>
    }
  </>
}

export default App