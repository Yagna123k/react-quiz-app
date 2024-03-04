import { useEffect, useState } from 'react'
import './Question.css'
import data from '../assets/quizQuestion.json'

// eslint-disable-next-line react/prop-types
function Question(props ) {

    const {count, setCount, score, setScore, setState} = props

    const previous = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const next = () => {
        if (count < 14) {
            setCount(count + 1)
        }
    }

    const validate = (select) => {
        if (data[count].answer == select) {
            setScore(score + 1)
            alert("Correct Answer")
            setCount(count + 1)
        } else {
            alert("Incorrect Answer")
            setCount(count + 1)
        }
        if(count == 14){
            setState(3)
        }
    }

    return (

        <div className='container'>
            <div className='box'>
                <h1>Question</h1>
                <p id='qnum'>{count + 1} of {15}</p>
                <h2 className='question' key={count}>{data[count].question}</h2>

                <div className='options'>
                    <button className='option' onClick={()=>{validate(data[count].optionA)}}>{data[count].optionA}</button>
                    <button className='option' onClick={()=>{validate(data[count].optionB)}}>{data[count].optionB}</button>
                    <button className='option' onClick={()=>{validate(data[count].optionC)}}>{data[count].optionC}</button>
                    <button className='option' onClick={()=>{validate(data[count].optionD)}}>{data[count].optionD}</button>
                </div>
                <div className='nextOptions'>
                    <button className='previous' onClick={previous}>Previous</button>
                    <button className='next' onClick={next}>Next</button>
                    <button onClick={() => {
                        const con = confirm("Are you sure you want to Quit ?")
                        if (con) {
                            setState(1)
                        }
                    }} className='quit'>Quit</button>
                    <button onClick={() => {
                        const con = confirm("Are you sure you want to Finish ?")
                        if (con) {
                            setState(3)
                        }
                    }} className='finish'>Finish</button>
                </div>
                
            </div>
        </div>
    )
}

export default Question