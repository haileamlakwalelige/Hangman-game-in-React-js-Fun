/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';

import './App.css';
import step0 from './components/images/0.jpg';
import step1 from './components/images/1.jpg';
import step2 from './components/images/2.jpg';
import step3 from './components/images/3.jpg';
import step4 from './components/images/4.jpg';
import step5 from './components/images/5.jpg';
import step6 from './components/images/6.jpg';
import step7 from './components/images/7.jpg';

function App() {
const images =[step0, step1, step2, step3, step4, step5, step6, step7];
var programmingLanguage = [ 'java', 'html', 'css', 'python', 'javascript', 'csharp','flutter','ruby', 'php','react','angular', 'vue','dart',  'kotlin','sql', 'fortran', 'json', 'mongodb',  'golang',  'r', 'c']

const language=programmingLanguage[Math.floor(Math.random()*programmingLanguage.length)];
const [guessed, setGuessed]=useState("");
const [result, setResult]=useState("");
const [mistake, setMistake]=useState(0);
const [answer, setAnswer]=useState([]);


useEffect(() => {
  handleAnswer();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [answer]);
useEffect(()=>{
  handleResult();
}, 5000);

  function handleAnswer() {
    setAnswer(language);
  }
const checkHandler =(e)=>{
  if(guessed === answer){
    setMistake(0);
    setGuessed("");
    handleAnswer();
    setResult("YOU WON! It was " + answer)

  }else{
    setMistake(6);
    setGuessed("");
    setResult("YOU LOSS! It was " + answer)
    handleAnswer();
  }
}
const handleResult=()=>{
  setResult("");
}
  return (
    <div className="App">
    <h1>Hangman</h1>
    <div className="whole">
    {programmingLanguage.map((word, index) =>
      <p className="words" key={index}>{word.toUpperCase()}</p>
    )}
    </div>
    <div  className="images">
      <img src={images[mistake]} alt="your Mistake"  />
    </div>
    <div>
      <p className='para'>Guess the programming Language from the above ones : </p>
      <p className='result'>{result}</p>
      <form className='forms'>
        <input className="texts" type="text" value={guessed}  onClick={handleResult}
        placeholder="Guess the Word and type now ..." onChange={(e)=>setGuessed(e.target.value)}/>
      </form>
      <button className="check" onClick={()=>checkHandler()}>Check You</button>
    </div>
    <div>
    </div>
    </div>
  );
}

export default App;
