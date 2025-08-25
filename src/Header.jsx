import React from 'react'
// function Header({count,setCount}) {remove drstructure
function Header({count,setCount}) {
  return (
    <>
      <h3>Header section! <button onClick={()=>setCount(count+1)}>Change Counter</button></h3>
      {/* onClick={()=>setCount(count+1)} - remove onClick from button*/}
    </>
  )
}

export default Header