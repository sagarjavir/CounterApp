import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import MainContext from './MainContext.jsx'

createRoot(document.getElementById('root')).render(
  <MainContext>
    {/* <Home /> */}
    <App />
  </MainContext>,
  // useStrict provide answer one more time by debugging. thats reason please remove it
)
