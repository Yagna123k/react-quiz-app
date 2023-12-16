import './Home.css'

function Home({setState}){
    return <div className='container'>
        <h1>Welcome to Quiz</h1>
        <button onClick={ ()=>{setState(2)} }>Play Now</button>
    </div>
}

export default Home