import {useState} from 'react'
import Home from './components/Home'
import Question from './components/Question'
import Result from './components/Result'

function App(){
  const[state , setState] = useState(1)
  return <>

  {
    state == 1 ? <Home setState={setState}/> : state == 2 ? <Question setState={setState}/> : <Result setState={setState} />
  }
  </>
}

export default App