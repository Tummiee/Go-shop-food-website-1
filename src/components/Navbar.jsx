import  {useState} from 'react';
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import '../Styles/Navbar.css'
import ExpandingSearchButton from './ExpandingSearchButton';

function Navbar() {

const [openLinks, setOpenLinks] = useState(false)

const toggleNavbar = () => {
      setOpenLinks(!openLinks)
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
          
      </div>
      
    </div>
  )
}

export default Navbar