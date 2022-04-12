import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import AuthContextProvider from './contexts/Authcontext';
function App() {
  return (
    <>
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={<Auth authRoute="login" />}
          />
          <Route
            path="/register"
            element={<Auth authRoute="register" />}
          />
          <Route
            path="/user"
            element={<Auth authRoute="user" />}
          />
        </Routes>
      </Router>
    </AuthContextProvider>
    </>
    
  )
}


export default App
