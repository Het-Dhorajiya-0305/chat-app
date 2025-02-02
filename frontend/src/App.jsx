
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './component/home/Home.jsx';
import Chat from './component/chat/Chat.jsx';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/chat' element={<Chat></Chat>}></Route>
      </Routes>

    </Router>
  )
}

export default App
