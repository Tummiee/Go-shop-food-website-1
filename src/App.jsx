import './App.css'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/LoginSignup/Login';
import Signup from './components/LoginSignup/Signup';
import ProtectedRoutes from './utils/ProtectedRoutes';

function App() {

  return (
    <><AuthProvider>
      <Router>
        
          <Routes>
            <Route path="/login" exact Component={Login} />
            <Route path="/signup" exact Component={Signup} />
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <Routes>
                  
                    <Route element={<ProtectedRoutes/>}>
                      <Route path="/" exact Component={Home} />
                      <Route path="/menu" exact Component={Menu} />
                      <Route path="/about" exact Component={About} />
                      <Route path="/contact" exact Component={Contact} />
                    </Route>
                  
                  </Routes>
                  <Footer />
                </>
              }
            />
          </Routes>
        
      </Router>
      </AuthProvider>
    </>
  );
}

export default App
