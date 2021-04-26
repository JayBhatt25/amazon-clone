import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = e  => {
        e.preventDefault();
        
        auth 
            .signInWithEmailAndPassword(email, password)
            .then( auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))

    }
    // Test user is testmail25@gmail.com pass:- testmail25 same with **98

    const register = e  => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            if(auth){
                history.push('/')
            }
        })
        .catch(err => {
            alert(err.message)
        })
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img className='login__logo' src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'></img>
            </Link>
            <div className='login__container'>
                <h1>Sign-In</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange= {e => setPassword(e.target.value)}/>

                    <button onClick={signIn} type="submit" className='login__signInButton'>Sign In</button>
                </form>

                <p>
                By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.
                </p>

                <p>New to Amazon ?</p> 
            
                <button onClick={register} className='login__registerButton'>Create your Amazon account</button>

               
            </div>
            <script async data-id="77306" src="https://cdn.widgetwhats.com/script.min.js"></script>
            
        </div>

        
    )
}

export default Login
