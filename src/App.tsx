
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function App() {
  
  return (
   <Routes>
    <Route path='/' index element={<LandingPage/>}/>
   </Routes>
  )
}

export default App
