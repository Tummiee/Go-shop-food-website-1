import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './LoginSignup.css'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';



function LoginSignup() {

const navigate = useNavigate();
    
const handleLoginPage = () => {
  //logic to navigate to signout page
  navigate('/login')
}

   
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signup(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (<div className='body'>
     <img src={Logo} style={{width: "100px",
                                borderTopRightRadius: "10%",
                                borderBottomLeftRadius: "10%",
                                margin: "0",
        }}/>
    <div className='container' id='signup'>
       
        <div className='header'>
            <div className="text">Signup</div>
            <div className="underline"></div>
        </div>
        <form onSubmit={handleSignup} className="inputs" >
            <div className="input">
                <AccountCircleIcon />
                <input type="text" placeholder='Name'/>
            </div>
            
            <div className="input">
                <EmailIcon />
                <input type="email" placeholder='Email' 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>
            <div className="input">
                <LockIcon />
                <input type="password" placeholder='Password' 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
            </div>
            {error && <p className="error">{error}</p>}
            <div className="submit-container">
                <button className= "submit" type='submit'>Sign Up</button>
            </div>
        </form>
        <div className="AuthPageSwitch">Have an account? 
            <span onClick={handleLoginPage}> Click here</span></div>

    </div>
  </div>)
}

export default LoginSignup