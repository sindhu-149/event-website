import React from 'react';
import { Link } from 'react-router-dom';
import './products.css';


const Products = ({productsData, category}) => {


  return (
    <div>
      {category.map(cat =>(
        
    <div className='products'>
      <div className='heading'>{cat.name}</div>
      <div className='product-box'>
        {productsData
        .filter((p) => p.category === cat.name)
        .slice(0, 4)
        .map((p) => (
            <Link to={`/single-product/${p._id}`} className='navStyle'>
          <div key={p.id} className='product'>
              <img className='product-img' src={p.photo} alt={p.title} />
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
      ))}
      </div>
  );
};

export default Products;

