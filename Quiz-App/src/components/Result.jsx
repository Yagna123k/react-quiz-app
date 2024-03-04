/* eslint-disable react/prop-types */
import './Result.css'

function Result(props){
    const {setState, count, score, setScore, setCount} = props
    return(
        <div className='container'>
        <h1 style={{
            color:"#4CAF50"
        }}>Result</h1>
        <div className='card'>
            {/* <h3 id='phrase'>You need more practice</h3> */}
            <h1 id='score' style={{color:"#40E0D0"}}>Your Score is {Math.round((score/15)*100)}%</h1>
            <div className='details'>
                <b><p>Total number of question</p></b>
                <b><p>15</p></b>
            </div>
            <div className='details'>
                <b><p>No of attempted questions</p></b>
                <b><p>{count}</p></b>
            </div>
            <div className='details'>
                <b><p>Number of correct answers</p></b>
                <b><p>{score}</p></b>
            </div>
            <div className='details'>
                <b><p>Number of wrong answers</p></b>
                <b><p>{count-score}</p></b>
            </div>
        </div>
        <div>
            <button id='again' onClick={()=>{
                setState(2)
                setCount(0)
                setScore(0)}}>Play Again</button>
            <button id='home' onClick={()=>{setState(1)
            setCount(0)
            setScore(0)}}>Back to Home</button>
        </div>
        </div>
    )
}

export default Result