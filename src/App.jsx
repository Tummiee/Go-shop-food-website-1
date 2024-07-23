import './App.css'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup/LoginSignup';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/loginSignup" exact Component={LoginSignup} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="/menu" exact Component={Menu} />
              <Route path="/about" exact Component={About} />
              <Route path="/contact" exact Component={Contact} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
    </>
  );
}

export default App
