
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

import { AnimatePresence } from 'framer-motion';
import SignIn from './components/ui/Auth/SignIn';
import SignUp from './components/ui/Auth/SignUp';
import ForgetPage from './components/ui/Auth/ForgetPage';
import VerifyEmailPage from './components/ui/Auth/VerifyEmailPage';
import CheckEmail from './components/ui/Auth/CheckEmail';
import PrivateRoute from './components/privateRoutes/PrivateRoute';
import Main from './components/ui/main/Main';
import VerificationSuccess from './components/ui/Auth/VerificationSuccess';
import AlreadyVerified from './components/ui/Auth/AlreadyVerified';
import VerificationError from './components/ui/Auth/VerificationError';

function App() {

  return (
    <AnimatePresence>

      <Routes>
        <Route path='/' index element={<LandingPage />} />
        {/* protected routes */}
        <Route path='/dashbaord' element={<PrivateRoute>
          <Main />
        </PrivateRoute>}
        />
        {/* Auth screens */}
        <Route path="/signin" element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forget-password' element={<ForgetPage />} />
        <Route path="/verify-email/:token" element={<VerifyEmailPage />} />
        <Route path='/check-email' element={<CheckEmail />} />
        <Route path="/verification/success" element={<VerificationSuccess />} />  
        <Route path="/verification/already-verified" element={<AlreadyVerified />} />
        <Route path="/verification/error" element={<VerificationError />} />
      </Routes>
    </AnimatePresence>

  )
}

export default App
