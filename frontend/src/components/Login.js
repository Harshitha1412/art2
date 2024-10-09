import React, { useState } from 'react';

import '../styles/Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  return (
    <div className="login-container">
     


      <form >
        <div>
        <h2 style={{ color: 'white', fontSize: '30px', textAlign:'center'}}>Login</h2>
          <label style={{ color: 'white', fontSize: '15px' }}>Username</label>
          <input
           type="text"
           style={{ backgroundColor: 'white',color:'black' }}
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           required
          />
        </div>
        <div>
          <label style={{ color: 'white', fontSize: '15px' }}>Password</label>
          <input
            type="password"
            style={{ backgroundColor: 'white',color:'black' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="login-button">
        <button type="submit" >
    <span style={{ fontWeight: 'bold' }}>LOGIN</span>
</button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        <p style={{ marginTop: '10px', color:'white'}}>Don't have an account? <a href="/register" style={{ color: 'lightblue' }}>Create one here</a></p>
      </form>
      
    </div>
    
  );
};

export default Login;
