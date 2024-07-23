import {useState} from 'react';
import './LoginSignup.css'
import Logo from '../../assets/logo.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';



function LoginSignup() {

    const [action, setAction] = useState("Login");

  return (
    <div className='container'>
        <img src={Logo} style={{width: "100px",
                                borderBottomRightRadius: "10%",
                                borderBottomLeftRadius: "10%"
        }}/>
        <div className='header'>
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login" ? <div></div> : <div className="input">
                <AccountCircleIcon />
                <input type="text" placeholder='Name'/>
            </div>}
            
            <div className="input">
                <EmailIcon />
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
                <LockIcon />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? 
            <span>Click here</span></div>}

        <div className="submit-container">
            <div className={action==="Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup