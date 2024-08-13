import Game from './components/game/Game'
import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </Router>
  )
}

export default App
