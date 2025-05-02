import React, { useState } from 'react'
//send email and password to the server

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const handleSubmit = (e)=>{
        e.preventDefault();
       if(!email.includes("@")){
        setError("Invalid email");
        return;
    }
    if(password.length < 8){
        setError("Invalid password");
        return;
    }
    console.log(email,password);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' />
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' />
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md' type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
