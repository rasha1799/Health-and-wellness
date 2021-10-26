import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const { signInUsingGoogle,signInUsingEmailAndPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }
  const processLogin = (email, password) => {
    signInUsingEmailAndPassword()
      .then(result => {
        const user = result.user;
        console.log(user);
        
      })
      
  }


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form mb-5">
            <div>
                <h2>Login</h2>
                <form onSubmit={processLogin}>
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input onBlur={handlePasswordChange}    type="password" placeholder="password" name="" id="" />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to wellness? <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>
                <button
                    className="btn-regular"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;