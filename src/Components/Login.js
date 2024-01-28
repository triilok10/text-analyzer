import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <div className="mainLogin-page">
                <img src="./Images/bg.login.jpg" alt="" />
                <div className="main-login-top">
                    <div className="mainText-left-signup"><Link to="/">TextAnalyzer</Link></div>
                    <div className="main-login-center">
                        <div className="main-login-center-input">
                            <div className="main-login-center-input-top">Welcome to the Login Page</div>
                            <div className="main-login-center-input-top-user">User Login</div>
                            <div className="main-login-center-input-top-user-name">
                                <input type="text" placeholder=' username' />
                            </div>
                            <div className="main-login-center-input-top-user-name">
                                <input type="text" placeholder=' password' />
                            </div>
                            <div className="main-login-center-input-top-check">
                                <div className="main-login-center-input-top-check-left"><input type="checkbox" /><span><p>Remember Me</p></span></div><div className="main-login-center-input-top-check-right"><Link to="">Forget Password</Link></div>

                            </div>
                            <div className="main-login-center-input-top-login"><button>Login</button></div>
                            <div className="main-login-center-input-footer"><p>This Login Page is Created by Trilok Chand Swami</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
