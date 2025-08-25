import React,{ Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserContext } from './components/UserContext';
import Home from './Home';
import Counter from './components/CounterReducer';
import UseMemo from './components/UseMemo';
import InputRef from './components/InputRef';
import FetchData from './components/FetchData';

function App() {
  const errMsg='Please enter age greater than 18';
  const [text, setText] = useState('');
  const [err, setErr]=useState(false);
  const inputHandle=(e)=>{
    setErr(false);
    setText(e.target.value);
    if(e.target.value<18){
      setErr(true);
    }
  }
  const UseMemo= React.lazy(()=>import('./components/UseMemo'));
  return (
    <>
      <p>Enter age as per instruction!</p><br/>
      <input value={text} onChange={inputHandle} type='text' placeholder='Enter Age'/>
      {err && <p>{errMsg}</p>}
      <UserContext.Provider value="Sagar">
        <Home />
      </UserContext.Provider>
      <h3>Basic counter reducer function</h3>
      <Suspense fallback={<p>Loading...</p>}><UseMemo />
      <InputRef />
      <Counter />
      </Suspense>
      <h3>API Data fetched here..</h3>
      <FetchData/>
    </>
  )
}
//
export default App
