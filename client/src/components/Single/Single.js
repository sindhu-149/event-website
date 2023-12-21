import React from 'react'
import SingleProduct from '../singleProduct/SingleProduct'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const Single = () => {
  return (
    <div>
    <Navbar />
    <Header />
        <SingleProduct />
    <Footer />
    </div>
  )
}

export default Single