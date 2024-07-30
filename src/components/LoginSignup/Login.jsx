
import { useState } from 'react';
import './LoginSignup.css'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from '../../contexts/AuthContext';
import Notification from '../Notification';




function Login() {

    const navigate = useNavigate();
    
const handleSignupPage = () => {
  //logic to navigate to signout page
  navigate('/signup')
}

const [showNotification, setShowNotification] = useState(false);

const { login } = useAuth();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

const handleLogin = async (e) => {
  e.preventDefault();
  setError('');

  try {
    await login(email, password);
    setShowNotification(true);
            setTimeout(() => {
                navigate('/');
            }, 2000); // Navigate after 5 seconds
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
    <div className='container' id='login'>
       
        <div className='header'>
            <div className="text">Login</div>
            <div className="underline"></div>
        </div>
        <form onSubmit={handleLogin} className="inputs" >
           
            <div className="input">
                <EmailIcon />
                <input type="email" placeholder='Email' 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className="input">
                <LockIcon />
                <input type="password" placeholder='Password' 
                 id="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required
                 />
            </div>
            {error && <p className="error">{error}</p>}
            <div className="submit-container">
                <button className="submit" type='submit'>Log In</button>
            </div>
        </form>
        {showNotification && (
                <Notification
                    message="Login successful!"
                    duration={2} // 5 seconds countdown
                    onClose={() => setShowNotification(false)}
                />
            )}
        <div className="AuthPageSwitch">Create new Account 
        <span onClick={handleSignupPage}>Click here</span></div>
    </div>
  </div>)
}

export default Login