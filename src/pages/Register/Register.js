import React, { useState } from 'react';
import { Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import processLogin from '../Login/Login'

const Register = () => {
    const {createUserUsingEmail,verifyEmail,signInUsingGoogle}=useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    
    const handleEmailChange = e => {
        setEmail(e.target.value);
      }
    
      const handlePasswordChange = e => {
        setPassword(e.target.value)
      }

    const handleRegistration = e => {

        e.preventDefault();
        const registerNewUser = (email, password) => {
          createUserUsingEmail()
            .then(result => {
              const user = result.user;
              console.log(user);
              setError('');
              verifyEmail();
          
            })
            .catch(error => {
              setError(error.message);
            })
        }
        console.log(email, password);
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
    
        if (isLogin) {
          processLogin(email, password);
        }
        else {
          registerNewUser(email, password);
        }
        
    
      }
      const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result =>history.push(redirect_uri)).catch(error=>{
              console.log(error);
            })
    }

  
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit={handleRegistration}>
                    <input type="email" name="" onBlur={handleEmailChange} id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" onBlur={handlePasswordChange} id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-------------</div>
                <button onClick={handleGoogleLogin} className="btn-regular">Google Sign In</button>
            </div>
            <div><div className="row mx-5 mb-3 text-danger">{error}</div></div>
        </div>
    );
};

export default Register;