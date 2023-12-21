import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './homePage.css'
import Occasion from '../occasion/Occasion'
import Products from '../products/Products'
import Slider from '../slider/Slider'
import SingleProduct from '../singleProduct/SingleProduct'
import Demo from '../demo/Demo'
import Navbar from '../navbar/Navbar'


const HomePage = () => {
  return (
    <div className='home'>
    <Navbar />
    <Header />
    <Slider />
    <Occasion />
    <Products />
    <Footer />
    </div>
  )
}

export default HomePage