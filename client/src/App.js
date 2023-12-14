import './App.css';
import HomePage from './components/home/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Products from './components/products/Products';
import SingleProduct from './components/singleProduct/SingleProduct';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/single-product/:id' element={<SingleProduct/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </Router>
     

    </div>
  );
}

export default App;
