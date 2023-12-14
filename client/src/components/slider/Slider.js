import React from 'react'
import './slider.css'
import slider from '../../images/full slider.png'

const Slider = () => {
  return (
    <div className='slider'>
      <img className="slider-image" src={slider}></img> 
    </div>
  )
}

export default Slider