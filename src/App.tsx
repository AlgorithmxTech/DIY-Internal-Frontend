
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

import { AnimatePresence } from 'framer-motion';
import SignIn from './components/ui/Auth/SignIn';
import SignUp from './components/ui/Auth/SignUp';
import ForgetPage from './components/ui/Auth/ForgetPage';
import VerifyEmailPage from './components/ui/Auth/VerifyEmailPage';
import CheckEmail from './components/ui/Auth/CheckEmail';
function App() {

  return (
    <AnimatePresence>

      <Routes>
        <Route path='/' index element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forget-password' element={<ForgetPage/>}/>
        <Route path="/verify-email/:token" element={<VerifyEmailPage />} />
        <Route path='/check-email' element = {<CheckEmail/>}/>
      </Routes>
    </AnimatePresence>

  )
}

export default App
