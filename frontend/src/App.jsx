
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './component/Home';
import Chat from './component/Chat';

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
