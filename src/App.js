import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Show from './pages/Show'

const App = () => {
  
  return (
    <Router>
      <nav>
        <Link to = '/'>Home</Link>
      </nav>
      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = '/:id' element = {<Show />}/>
      </Routes>
    </Router>
  )
}

export default App