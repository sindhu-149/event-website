import './App.css';
// import { useContext } from "react";

import HomePage from './components/home/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Products from './components/products/Products';
import Single from './components/Single/Single';
import IndividulaPage from './components/individulaPage/IndividulaPage';
import Sindhu from './components/sindhu/Sindhu';
import Login from './components/login/Login';
import Register from './components/register/Register';

import { Context } from "./context/Context";
import { useContext } from 'react';


function App() {
  const {user} = useContext(Context)
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/hey' element={<Single/>} />
        <Route path='/single-product/:id' element={<Sindhu />} />
        <Route path='/:category' element={<IndividulaPage/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />


      </Routes>
    </Router>
     

    </div>
  );
}

export default App;
