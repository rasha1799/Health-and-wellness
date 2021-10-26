import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const { signInUsingGoogle,signInUsingEmailAndPassword } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


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
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" placeholder="Password" name="" id="" />
                    <br /><br />
                    <input onBlur={signInUsingEmailAndPassword} style={{backgroundColor:'rgba(0, 238, 255, 0.562)',textAlign:'center',fontWeight:'bold'}} placeholder="submit" value="Submit" />
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