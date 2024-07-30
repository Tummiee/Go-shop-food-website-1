import  {useState} from 'react';
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import '../Styles/Navbar.css'
import ExpandingSearchButton from './ExpandingSearchButton';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


function Navbar () {

const [openLinks, setOpenLinks] = useState(false)

const toggleNavbar = () => {
      setOpenLinks(!openLinks)
}

const navigate = useNavigate();
const { logout } = useAuth();

const handleLogout = async () => {
  try {
    await logout();
    navigate('/login');
} catch (error) {
    console.error("Error logging out:", error);
}
}

  return (
    <div>
      <div className="navbar">
          <div className="leftSide" id={openLinks ? "open" : "close"}>
              <img src={Logo} style={{width: "100px"}}/>   
              <div className='hiddenLinks'>
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
                <button onClick={handleLogout} style={{ marginLeft: '10%',
                                                        border: '0',
                                                        outline: '0',
                                                        color: 'red',
                                                        background: 'none',
                                                        
                }}>Logout</button>
              </div>
          </div>  

          <div className="rightSide">
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
            <button onClick={toggleNavbar}>
              <MenuOpenIcon />
            </button>
          </div>

          <ExpandingSearchButton />
          <button className='logout' onClick={handleLogout} style={{ marginLeft: 'auto', 
                                                  height: '50%',
                                                  border: '0',
                                                  outline: '0',
                                                  color: 'red',
                                                  background: 'none',
                                                  padding: '20px' }}>Logout
          </button>
          
      </div>
      
    </div>
  )
}

export default Navbar