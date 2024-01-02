import React, { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async(e) =>{
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post('/admin/register',{
        username,
        email,
        password
      })
      // console.log(res);
      res.data && window.location.replace('/login')
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className='adminRegister'>
    <span className='registerTitle'>register</span>
        <form className='registerForm' onSubmit={handleSubmit}>
            <label>Username</label>
            <input type='text' className="registerInput" placeholder='Enter username...' onChange={e=>setUsername(e.target.value)}/>
            <label>Email</label>
            <input type='text' className="registerInput" placeholder='Enter your email...'  onChange={e=>setEmail(e.target.value)} />
            <label>password</label>
            <input type='password'className="registerInput" placeholder='Enter your password...'  onChange={e=>setPassword(e.target.value)} />
            <button className='registerButton'type='submit'>Register</button>
        </form>
    <button className='registerLoginButton'><Link className='link' to='/login'>Login</Link></button>
    {error && <span style={{color:"red",marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  )
}

export default Register