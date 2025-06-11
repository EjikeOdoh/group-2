
import './App.css'
import ForgotPassword from './pages/ForgotPassword'
import Hero from './pages/Hero'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'
import Questionaire from './pages/Questionaire'
import Report from './pages/Report'
import ResetPassword from './pages/ResetPassword'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Plan from './pages/Plan'
import HabitTracker from './pages/HabitTracker'
import Reminder from './pages/Reminder'
import Protected from './pages/Protected'
import { BrowserRouter, Route, Routes } from 'react-router'
import AuthProvider, { AuthContext } from './context/AuthContext'
import { useContext } from 'react'
import Settings from './pages/Settings'
import Education from './pages/Education'
import FertilityReport from './pages/FertilityReport'
import Notification from './pages/Notification'


function Navigation() {

  const isLoggedIn = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>

        {
          isLoggedIn ?
            (
              <>
                <Route path="/" element={<Protected />}>
                  <Route
                    index
                    element={<Dashboard />}
                  />

                  <Route
                    path="habit-tracker"
                    element={<HabitTracker />}
                  />
                  <Route
                    path="schedule"
                    element={<Reminder />}
                  />
                  <Route
                    path="fertility-report"
                    element={<FertilityReport />}
                  />
                  <Route
                    path="settings"
                    element={<Settings />}
                  />
                  <Route
                    path="education"
                    element={<Education />}
                  />
                  <Route
                    path="plan"
                    element={<Plan />}
                  />

                  <Route
                    path="notifications"
                    element={<Notification />}
                  />

                  <Route
                    path="*"
                    element={<Dashboard />}
                  />

                </Route>
                <Route path='/report' element={<Report />} />


              </>
            ) :
            (
              <>
                <Route path='/'>
                  <Route
                    index
                    element={<LandingPage />}
                  />
                  <Route
                    path="login"
                    element={<Login />}
                  />
                  <Route
                    path="register"
                    element={<Signup />}
                  />
                  <Route
                    path="questions"
                    element={<Questionaire />}
                  />
                  <Route
                    path="report"
                    element={<Report />}
                  />
                  <Route
                    path="forgot-password"
                    element={<ForgotPassword />}
                  />
                  <Route
                    path="reset-password"
                    element={<ResetPassword />}
                  />
                </Route>

              </>

            )
        }
      </Routes>
    </BrowserRouter>
  )
}

function App() {

  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  )
}

export default App
