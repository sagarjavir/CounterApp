import React, { useRef } from 'react'

function InputRef() {
const inputRef=useRef(null);
const focusInput=()=>inputRef.current.focus();
  return (
    <div>
      <input ref={inputRef} type='text'/>
      <button onClick={focusInput}>Focus</button>
    </div>
  )
}

export default InputRef
