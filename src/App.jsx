<<<<<<< Updated upstream
import Header from './components/Header'
import Layout from './components/Layout'

=======
import Login from './Login'
import Signup from './Signup'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
>>>>>>> Stashed changes

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

<<<<<<< Updated upstream
    return (
      <>
        <Header/>
        <Layout/>
      </>
    )
  }
=======
        <Route
          path='/home'
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  )
}
>>>>>>> Stashed changes

export default App
