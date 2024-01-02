import React from 'react'
import './slider.css'
import slider from '../../images/full slider.png'

const Slider = () => {

  return (
    // <div className='slider'>
    
    
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img className="slider-image" src={slider}></img>
    </div>
    <div className="carousel-item">
    <img className="slider-image" src={slider}></img>
    </div>
    <div className="carousel-item">
    <img className="slider-image" src={slider}></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
// </div>
  )
}

export default Slider