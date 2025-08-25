import React, { createContext, useState } from 'react'

export let counterContext = createContext()

function MainContext({children}) {
    let [count, setCount]=useState(1);
    let globalObj = {count,setCount}
  return (
    <div>
        <counterContext.Provider value={globalObj}>
        {children}
        </counterContext.Provider>

    </div>
  )
}

export default MainContext
