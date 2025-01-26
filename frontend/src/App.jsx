import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css'
import Home from './component/Home';
import Chat from './component/Chat';

function App() {


  return (
    <Router>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/chat' element={<Chat></Chat>}></Route>
    </Router>
  )
}

export default App
