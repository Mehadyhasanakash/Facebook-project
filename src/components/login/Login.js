import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="login">
        <div className="login-wrapper">
            <div className="login-left">
                <h5 className='login-logo'>Facebook App</h5>
                <span className='login-dce'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, esse.</span>
            </div>
            <div className="login-right">
                <div className="login-box">
                    <input placeholder='Email' className='login-input' />
                    <input  placeholder='password' className='login-input' />
                    <button className='loginButton'> Log In</button>
                    <span className="forget-password">Forget Password?</span>
                    <button className='new-account-btn'>Create a new account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login