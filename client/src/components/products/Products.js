// import React from 'react'
// import './products.css'
// import info from '../../data/all.json'

// const Products = () => {
//     console.log(info);
//   return (
//     <div className='products'>
//         <div className='heading'>All Products</div>
//         <div className='product-box'>
//         {info.map(p=>(
//             <div className='product'>
//                 <img  className='product-img' src={p.Image}></img>
//                 <p className='product-name'>{p.title}</p>
//                 <div className='product-des'>
//                     <p className='price'>₹{p.price}</p>
//                     <div className='rating-box'>
//                         <p className='rating'>4.9</p>
//                     </div>
//             </div>
//             </div>
//         ))}
//         </div>
//     </div> 
//   )
// }

// export default Products


// Products.js
// Products.js
import React from 'react';
import { Link } from 'react-router-dom';
import './products.css';
import info from '../../data/all.json';

const Products = () => {
  const slicedData = info.slice(0, 8);
  return (
    <div className='products'>
      <div className='heading'>All Products</div>
      <div className='product-box'>
        {slicedData.map((p) => (
            <Link to={`/single-product/${p.id}`} className='navStyle'>
          <div key={p.id} className='product'>
            {/* Use Link to wrap the image and navigate to SingleProduct */}
            
              <img className='product-img' src={p.image} alt={p.title} />
           
            <p className='product-name'>{p.title}</p>
            <div className='product-des'>
              <p className='price'>₹{p.price}</p>
              <div className='rating-box'>
                <p className='rating'>{p.rating}</p>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;

