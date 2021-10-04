import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
function App() {

  const[sum,setSum]=useState({
    firstValue:null,
    secondValue:null
  })

  return (
    <div className="App" style={{display:'flex', gap:5}}>
    <input type="number" value={sum.firstValue} onChange={(e)=>setSum({...sum,firstValue:Number(e.target.value)})} />
     +
    <input type="number" value={sum.secondValue} onChange={(e)=>setSum({...sum,secondValue:Number(e.target.value)})} />
     =
     {sum.firstValue!=null &&sum.secondValue!=null?
     <>{sum.firstValue+sum.secondValue}</>
     :""
     }
   </div>
  );
}

export default App;
