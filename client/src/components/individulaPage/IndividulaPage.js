import React, {useEffect,useState} from 'react'
import Navbar from '../navbar/Navbar'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Category from '../category/Category'
import axios from 'axios'

const IndividulaPage = () => {

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
    <div>
        <Navbar />
        <Header />
        <Category  productsData={productsData} category={category}/>
        <Footer />
    </div>
  )
}

export default IndividulaPage