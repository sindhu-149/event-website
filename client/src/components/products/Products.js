import React from 'react';
import { Link } from 'react-router-dom';
import './products.css';
import info from '../../data/all.json';
import category from '../../data/category.json'

const Products = () => {
  // const slicedData = info.slice(0,4);
  return (
    <div>
      {category.map(cat =>(
        
    <div className='products'>
      <div className='heading'>{cat.name}</div>
      <div className='product-box'>
        {info
        .filter((p) => p.category === cat.name)
        .slice(0, 4)
        .map((p) => (
            <Link to={`/single-product/${p.id}/${p.category}`} className='navStyle'>
          <div key={p.id} className='product'>
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
      ))}
      </div>
  );
};

export default Products;

