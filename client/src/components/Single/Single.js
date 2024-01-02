import React ,{ useContext, useEffect, useState }from 'react'
import AdminNav from '../adminNav/AdminNav'
import { Context } from '../../context/Context';
// import { userInfo } from 'os';

import Write from '../write/Write'

import axios from 'axios'


const Single = () => {
  const {user} = useContext(Context) 
  const userData = user.user;

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
    console.log(res.data);

  }
  fetchData()
},[])

  return (
    <div>
    <AdminNav />
        welcome admin {userData.username} 
    </div>
  )
}

export default Single