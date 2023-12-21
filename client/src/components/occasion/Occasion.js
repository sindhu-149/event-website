import React from 'react'
import './occasion.css'
import category from '../../data/category.json'
import { Link } from 'react-router-dom';

const Occasion = () => { 
  return (
    <div className='occasion'>
    {category.map(a=>(
      <Link to={`/${a.name}`} className='navStyle'>
        <div className='occ' id={a.id}><img src={a.image} className='type-img'></img><p className='type-text'>{a.name}</p></div>
      </Link>
    ))}
       

       
       

    </div>
  )
}

export default Occasion