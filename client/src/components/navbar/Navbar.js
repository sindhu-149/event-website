import React from 'react'
import './navbar.css'
import cart from '../../images/Cart.png'
import map from '../../images/map.png'
import search from '../../images/search.png'
import Location from '../location/Location'



const Navbar = () => {
  return (
    <div className='hero'>
        <div className='navbar'>

          <div className='logo'></div>

          <div className='search'>
            <div className='search-btn'>
              <img className='search-logo' src={search}></img>  
            </div>
            <input className='search-content' placeholder='Search Occasion, Decoration etc.'></input>
          </div>
          

            <div className='location'>
            <div> <img  className="map-logo"src={map}></img></div>
            
              <input className='location-content' placeholder='Select Delivery Location'></input>
            </div>
            {/* <Location /> */}

            <div className='cart'>
              <img src={cart}></img>
            </div>
        
        </div>
        <div className='nav'>
        
        <p className='nav-links'>Lorem Ipsum </p>  
        <p className='nav-links'>Lorem Ipsum</p>  
        <p className='nav-links'>Lorem Ipsum</p>  
        <p className='nav-links'>Lorem Ipsum</p>  
        <p className='nav-links'>Lorem Ipsum</p>  
        <p className='nav-links'>Lorem Ipsum</p>  

         
          
        </div>
    </div>
  )
}

export default Navbar