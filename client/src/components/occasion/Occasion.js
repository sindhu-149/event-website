import React from 'react'
import './occasion.css'
// import category from '../../data/category.json'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




const Occasion = ({category}) => { 

  const arr=[1,2,3,4,5,6]
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    // <div className='occasion'>
    // {category.map(a=>(
    //   <Link to={`/${a.name}`} className='navStyle'>
    //     <div className='occ' id={a.id}><img src={a.image} className='type-img'></img><p className='type-text'>{a.name}</p></div>
    //   </Link>
    // ))}

    // </div> 
    // <div className='occasion'>


    <div className='cou'>
    <Slider {...settings}>
    {category.map(a=>(
      <Link to={`/${a.name}`} className='navStyle'>
        <div className='occ' id={a.id}><img src={a.image} className='type-img'></img><p className='type-text'>{a.name}</p></div>
      </Link>
    ))}
    </Slider>
    </div>
  )
}

export default Occasion