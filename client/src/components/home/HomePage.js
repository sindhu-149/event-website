import React, {useEffect,useState} from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './homePage.css'
import Occasion from '../occasion/Occasion'
import Products from '../products/Products'
import Slider from '../slider/Slider'
import Navbar from '../navbar/Navbar'
import axios from 'axios'
import Hero from '../hero/Hero'

import Example from '../Example'


const HomePage = () => {
  const [productsData, setproductsData] = useState([])
  const [category, setCategory] = useState([])
  useEffect(()=>{ 
      const fetchData = async()=>{
      const res = await axios.get("/data")
      setproductsData(res.data)
    }
    fetchData()
  },[])

  useEffect(()=>{ 
    const fetchData = async()=>{
    const res = await axios.get("/categories")
    setCategory(res.data)
  }
  fetchData()
},[])


  return (
    <div className='home'>
    <Navbar />
    <Header />
    {/* <Hero /> */}
    {/* <MainSlider /> */}
    {/* <div className='chinnu'> */}
    <Slider />
    <Occasion category={category} />
    
    <Products  productsData={productsData} category={category}/>
    {/* <Example /> */}
    {/* </div> */}
    <Footer />
    </div>
  )
}

export default HomePage