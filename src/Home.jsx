import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Child from './Child'

function Home() {
  // let [count, setCount]=useState(1); we can overcome from props driling with help of propd driling so (1)comment useSate()
  //Context API help us to store data globaly
  //when you want to recive data from the context need to use the useContex
  return (
    <div>
        {/* challenge is to pass props/count from parent to header and footer. */}
        {/* <Header count={count} setCount={setCount}/> - we will remove pros from header*/}
        {/* <Header /> */}
      <h3 className='heading'>Parent Component </h3>
      {/* {count} - remove count variable from home */}
        <Child />
        {/* <Footer/> */}
    </div>
  )
}

export default Home
