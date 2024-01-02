import React, { useContext, useRef, useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../../context/Context'


const Login = () => {
  const userRef = useRef()
  const passwordRef = useRef()
  const {dispatch, isFetching} =useContext(Context)

  const [error, setError] = useState(false)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setError(false)
    dispatch({ type: "LOGIN_START" })
    try {
      const res = await axios.post('/admin/login', {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({ type : "LOGIN_SUCCESS", payload: res.data})
      res.data && window.location.replace('/hey')
    } catch (error) {
      dispatch({type: "LOGIN_FAILURE"})
      setError(true)
    }
  }
  // console.log(user, isFetching);
  return (
    <div className='adminLogin' onSubmit={handleSubmit} >
    <span className='loginTitle'>Login</span>
        <form className='loginForm' >
            <label>Username</label>
            <input type='text' className="loginInput" placeholder='Enter your username...' ref ={userRef}/>
            <label>password</label>
            <input type='password' className="loginInput" placeholder='Enter your password...' ref={passwordRef}/>
            <button className='loginButton' type='submit' disabled={isFetching}>Login</button>
        </form>
    <button className='loginRegisterButton'><Link className='link' to='/register'>Register</Link></button>
    {error && <span style={{color:"red",marginTop:"10px"}}>Something went wrong!</span>}

    </div>
  )
}

export default Login