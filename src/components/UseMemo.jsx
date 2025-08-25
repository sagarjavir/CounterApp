import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count, setCount]=useState(0);
    const [text, setText]=useState('');
    const expensiveCalculation = (num) =>{
       console.log("Calculating...");
       let result=0;
       for(let i=0;i<10000;i++){
        result += i;
       }
       return result+num;
    }
    const result = useMemo(() => expensiveCalculation(count), [count]);
    // const result=expensiveCalculation(count);
  return (
    <div>
       <h2>Expensive Calculation Example</h2>
       <p>Result: {result}</p>
       <button onClick={() => setCount(count + 1)}>Increment</button>
       <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Type something'/>
       <p>✅ Now the calculation only runs when count changes, not when typing in the input.
       </p>
    </div>
  )
}
export default UseMemo