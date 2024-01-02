//   import React from 'react'
//   import './navbar.css'
//   import cart from '../../images/Cart.png'
//   import map from '../../images/map.png'
//   import search from '../../images/search.png'
//   import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//   import { Link } from 'react-router-dom';
// //   import jsonData from '../../data/cat.json';
// //  import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


// import Location from '../location/Location'



//   const Navbar = () => {
    
//     return (
//       <div className='hero'>
//           <div className='navbar'>
//             <Link to="/">
//             <div className='logo'></div>
//             </Link>
//             <div className='search'>
//               <div className='search-btn'>
//                 <img className='search-logo' src={search}></img>  
//               </div>
//               <input className='search-content' placeholder='Search Occasion, Decoration etc.'></input>
//             </div>
//               <div className='location'>
//               <div> <img  className="map-logo"src={map}></img></div>
//                 <input className='location-content' placeholder='Select Delivery Location'></input>
//               </div>
//               <Location />
//               <div className='cart'>
//                 <img src={cart}></img>

//                 <div className="dropdown" >
//                 <div className="dropbtn"><AccountCircleIcon  className='personLogo'/></div>
//                 <div className="dropdown-content">
//                 <a href="#">Link 1</a>
//                 <div><Link to='/register'>Register</Link> / <Link  to='/login'>login</Link></div>
//                 <a href="#">Link 2</a>
//                 <a href="#">Link 3</a>
//                 </div>
//               </div>
//               </div>
//           </div>
//           <div>
//           </div>
//       </div>
//     )
//   }

//   export default Navbar

import React, { useState } from 'react';
import './navbar.css';
import cart from '../../images/Cart.png';
import map from '../../images/map.png';
import search from '../../images/search.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import Location from '../location/Location';

const Navbar = () => {
  const [showLocation, setShowLocation] = useState(false);

  const handleLocationClick = () => {
    setShowLocation(true);
  };

  return (
    <div className='hero'>
      <div className='navbar'>
        <Link to='/'>
          <div className='logo'></div>
        </Link>
        <div className='search'>
          <div className='search-btn'>
            <img className='search-logo' src={search} alt='search' />
          </div>
          <input className='search-content' placeholder='Search Occasion, Decoration etc.'></input>
        </div>
        <div className='location' onClick={handleLocationClick}>
          <div>
            <img className='map-logo' src={map} alt='map' />
          </div>
          <input className='location-content' placeholder='Select Delivery Location'></input>
        </div>
        {showLocation && <Location />}
        <div className='cart'>
          <img src={cart} alt='cart' />

          <div className='dropdown'>
            <div className='dropbtn'>
              <AccountCircleIcon className='personLogo' />
            </div>
            <div className='dropdown-content'>
              <a href='#'>Link 1</a>
              <div>
                <Link to='/register'>Register</Link> / <Link to='/login'>login</Link>
              </div>
              <a href='#'>Link 2</a>
              <a href='#'>Link 3</a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
