import React from 'react'
import './occasion.css'
import category from '../../data/category.json'

const Occasion = () => {
  const a=[1,2,3,4,5,6]
  return (
    <div className='occasion'>
    {category.map(a=>(
        <div className='occ' id={a.id}><img src={a.image} className='type-img'></img><p className='type-text'>{a.name}</p></div>
    ))}
       
       

    </div>
  )
}

export default Occasion