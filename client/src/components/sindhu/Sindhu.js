import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import SingleProduct from '../singleProduct/SingleProduct';


const Sindhu = () => {
    // const location = useLocation()

    const [productData, setProductData] = useState([])
    const [singleproduct, setSingleProduct] = useState([])
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    // console.log(path);
    useEffect(()=>{
        const getData = async() =>{
        const res = await axios.get("/data/"+path)
        console.log(res);
        setSingleProduct(res.data)
        };
        getData()
    },[path])

    useEffect(()=>{
        const productData = async() =>{
        const res = await axios.get("/data")
        console.log(res);
        setProductData(res.data)
        };
        productData()
    },[])
    const cat = singleproduct.category
    const unique = singleproduct._id
    const similar = productData.filter(c => c.category === cat && c._id !== unique)
    console.log(similar);

  return (
    <div>
    <Header />
    <Navbar />
    
    <SingleProduct singleproduct={singleproduct}  productData= {productData}/>
    <Footer />
    </div>
  )
}

export default Sindhu