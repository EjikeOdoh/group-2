
import './App.css'
import ForgotPassword from './pages/ForgotPassword'
import Hero from './pages/Hero'
import Login from './pages/Login'
import Questionaire from './pages/Questionaire'
import Report from './pages/Report'
import ResetPassword from './pages/ResetPassword'
import Signup from './pages/Signup'

function App() {

  return (
    <>
      <Signup />
      <Login />
      <Hero />
      <Questionaire />
      <ResetPassword />
      <ForgotPassword />
      <Report />
    </>
  )
}

export default App
