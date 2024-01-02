import React, { useContext } from 'react'
import './adminNav.css'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const Navbar = () => {
  const {user, dispatch} = useContext(Context) 
  const userData = user.user;
//   console.log(userData);
//   const PF = "http://localhost:5000/images/"
  const handleLogout = () =>{
    dispatch({ type: "LOGOUT"})
  }
//   console.log(user);
  return (
    <div className='anavbar'>
        <div className='nav-left'>
        <i className="navIcons fa-brands fa-square-facebook"></i>
        <i className="navIcons fa-brands fa-square-twitter"></i>
        <i className="navIcons fa-brands fa-square-pinterest"></i>
        <i className="navIcons fa-brands fa-square-instagram"></i>
        </div>
        <div className='nav-center'>
            <ul className='list'>
            
                <li className='listItems'><Link className='link' to='/'>HOME</Link></li>
                {/* <li className='listItems'><Link className='link' to='/'>ABOUT</Link></li> */}
                {/* <li className='listItems'><Link className='link' to='/'>CONTACT</Link></li> */}
                {/* <li className='listItems'><Link className='link' to='/write'>WRITE</Link></li> */}
                <li className='listItems' onClick= {handleLogout}>{ user && "LOGOUT"}</li>
                <li>{user.username}</li>
            </ul>
        </div>
        <div className='nav-right'>
        {user ? (
              <img className='nav-image' src={userData.profilePic}  alt='' />

        ) : (
          <ul className='list'>
          <li className='listItems'><Link className='link' to='/login'>Login</Link></li>
          <li className='listItems'><Link className='link' to='/register'>Register</Link></li>
          </ul>
        )}
            <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Navbar