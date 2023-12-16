import './Question.css'

function Question({setState}){
    return (

        <div className='container'>
            <div className='box'>
                <h1>Question</h1>
                <p id='qnum'>{1} of {15}</p>
                <h2 id='question'>Who is Yagna Kusumanchi</h2>

                <div className='options'>
                    <button className='option'>Author</button>
                    <button className='option'>Programmer</button>
                    <button className='option'>Entrepreneur</button>
                    <button className='option'>All of The Above</button>
                </div>
                <div className='nextoptions'>
                    <button className='previous' id='previous'>Previous</button>
                    <button className='Next' id='next'>Next</button>
                    <button onClick={ ()=>{setState(3)} } className='Quit' id='quit'>Quit</button>
                </div>
                
            </div>
        </div>
    )
}

export default Question