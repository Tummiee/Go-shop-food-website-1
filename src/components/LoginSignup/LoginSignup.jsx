import './LoginSignup.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';



function LoginSignup() {
  return (
    <div className='container'>
        <div className='header'>
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <AccountCircleIcon />
                <input type="text" />
            </div>
            <div className="input">
                <EmailIcon />
                <input type="email" />
            </div>
            <div className="input">
                <LockIcon />
                <input type="password" />
            </div>
        </div>
    </div>
  )
}

export default LoginSignup