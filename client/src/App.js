import './App.css';
import HomePage from './components/home/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Products from './components/products/Products';
import SingleProduct from './components/singleProduct/SingleProduct';
import Demo from './components/demo/Demo';
import Single from './components/Single/Single';
import IndividulaPage from './components/individulaPage/IndividulaPage';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/single-product/:id/:category' element={<Single/>} />
        <Route path='/:category' element={<IndividulaPage/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/' element={<HomePage/>} />

        {/* <Route path='/' element={<Demo/>} /> */}
      </Routes>
    </Router>
     

    </div>
  );
}

export default App;
