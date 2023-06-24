import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login=()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();

    const handleLogin=()=>{
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          })
          .then((res)=>{
            if(res.ok){
                return res.json();
                console.log(res.json());
            }
            else{
                throw new Error('Invalid username or password');
            }
          })
          .then((data)=>{
// save user
          })
          .then((data)=>{
            navigate('/profile');
          })
          .catch((error)=>{
            setError(error.message);
          });
    };
    return (
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <label>
                Username:
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <label>
                Password:
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <br/>
            <br/>
            <button onClick={handleLogin}>Log In</button>

        </div>
    );
};

export default Login;

  
