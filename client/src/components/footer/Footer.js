import React from 'react'
import './footer.css'
import facebook from '../../images/facebook.png'
import linkedin from '../../images/linkedin.png'
import twitter from '../../images/twitter.png'
import instagram from '../../images/instagram.png'
import payment from '../../images/payment-support.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-box'>
      <div className='foo-logo'></div>
      <div className='footer-des'>
        <div className='terms'>
          <p className='terms-text'>TERMS AND CONDITIONS</p>
          <p className='terms-text'>PRIVACY POLICY</p>
          <p className='terms-text'>WEBSITE TERMS AND CONDITIONS</p>
        </div>
        <div className='contact'>
           <div className='social-media'>
            <img  className="social-logo" src={facebook}></img>
            <img  className="social-logo" src={linkedin}></img>
            <img  className="social-logo" src={twitter}></img>
            <img  className="social-logo" src={instagram}></img>
           </div>
           <div className='payment'>
           <img  className="" src={payment}></img>
           </div>
        </div>
      </div>
      </div>
      
      <div className='copyright'>
      <p className='copy-text'>Copyright 2023 - The Creative Balloon Company - Integrated Ideas Agency Ltd - Registered Address: Greenwood, Bickley Park Rd, Bromley BR1 2AT Registered Number: 13329506. Registered in England & Wales.  
      </p>
      </div>
    </div>
    
  )
}

export default Footer