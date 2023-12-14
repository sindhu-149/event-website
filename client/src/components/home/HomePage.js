import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './homePage.css'
import Occasion from '../occasion/Occasion'
import Products from '../products/Products'
import Slider from '../slider/Slider'
import SingleProduct from '../singleProduct/SingleProduct'
import Demo from '../demo/Demo'


const HomePage = () => {
  return (
    <div className='home'>
    <Header />
    {/* <SingleProduct /> */}
    <Slider />
    <Occasion />
    <Products />
    {/* <Demo /> */}
    <Footer />
    </div>
  )
}

export default HomePage