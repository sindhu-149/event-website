import React, {useState} from 'react'
import './singleProduct.css'
import path from '../../images/Path.png'
import calendar from '../../images/calendar.png'
import check from '../../images/check mark.png'
import cross from '../../images/cross.png'
import star from '../../images/Star.png'
import Calendar from '../calendar/Calendar'
import Location from '../location/Location'
import { useParams } from 'react-router-dom';
import info from '../../data/all.json';




const SingleProduct = () => {

    const arr=[1,2,3,4,5]
    const pro= [1,2,3,4,5,6,7,8]
    const array=[1,2,3,4,5,6,7]
  

    const { id } = useParams();
    const product = info.find(p => p.id.toString() === id);
    const cat = product.category;
    const unique = product.id;
    const similar = info.filter(c => c.category === cat && c.id !== unique)
    console.log(cat, similar);


    

  return (
    <div>
        
        <div className='navigation'>Home</div>
        <div className='singleProduct-box'>
            <div className='aboutProduct'>
                <div className='singleProduct'>
                    <div className='productImageBox'>
                            <img className='pro-image' src={product.image}></img>
                                <div className='addOn'>
                                    {arr.map(a =>(
                                        <img className='adds'></img>
                                    ))}
                                </div>
                    </div>
                    <p className='item-price'>₹{product.price}</p>
                </div>

                <div className='description'>
                    <div className='des-type'>
                        <p className='des-content-types'>Overview</p>
                        <p className='des-content-types'>Reviews</p>
                        <p className='des-content-types'>Inclusions</p>
                    </div>

                    <p className='nameOfProduct'>{product.title}</p>

                    <div className='productRating'>
                        <div className='rate'>{product.rating}</div>
                        <span>125 Reviews</span>
                        <img src={path}></img>
                    </div>

                    <div className='selectLoaction'>

                        <form>
                            <Location />
                           
                            <Calendar />
                            
                            <div className='deliveryCharges'>
                                <p className='deliveryText'>Delivery Charges</p>
                                <p className='deliveryText'>₹1230</p>
                            </div>

                            <div className='buttonBox'>
                                <button className='bookButton'>Book Now</button>
                                <button className='cartButton'>Add to Cart</button>
                            </div>


                        </form>
                        </div>

                        <div className='overview'>
                            <h3>Overview</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt libero eu sem varius, nec convallis elit finibus. Vestibulum consectetur justo eu ex scelerisque, ut congue ex dapibus. Morbi vitae vehicula purus. Sed hendrerit euismod justo, in ultrices nunc. Quisque auctor ac massa eget efficitur. Vivamus sed sollicitudin odio.</p>
                        </div>

                        <hr className='line'></hr>


                        <div className='inclusions'>
                            <h3>Inclusions</h3>
                            <div className='inclusionText'>
                                <img src={check}></img>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='inclusionText'>
                                <img src={check}></img>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='inclusionText'>
                                <img src={check}></img>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='inclusionText'>
                                <img src={check}></img>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='inclusionText'>
                                <img src={check}></img>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='inclusionText'>
                                <img style={{width:"24px", height:"20px"}} src={cross}></img>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='inclusionText'>
                                <img style={{width:"24px", height:"20px"}} src={cross}></img>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>

                        <hr className='line'></hr>

                        <div className='overview experience'>
                            <h3>About the experience</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt libero eu sem varius, nec convallis elit finibus. Vestibulum consectetur justo eu ex scelerisque, ut congue ex dapibus. Morbi vitae vehicula purus. Sed hendrerit euismod justo, in ultrices nunc. Quisque auctor ac massa eget efficitur. Vivamus sed sollicitudin odio.</p>
                        </div>

                        <hr className='line'></hr>

                        <div className='overview experience'>
                            <h3>Need to know</h3>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                            </ul>
                        </div>

                        <hr className='line'></hr>


                        <div className='customize'>
                            <h3>Customize your experience</h3>
                            <div className='customize-box'>
                                <div className='c-box'>
                                    <div className='c-img'></div>
                                    <div className='customeDes'>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam tincidunt libero eu sem varius.</p>
                                        <div className='cust'>
                                            <p>₹0000</p>
                                            <div  className='cust-btn'>
                                                <button>-</button>
                                                <p>0</p>
                                                <button>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='c-box'>
                                    <div className='c-img'></div>
                                    <div className='customeDes'>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam tincidunt libero eu sem varius.</p>
                                        <div className='cust'>
                                            <p>₹0000</p>
                                            <div  className='cust-btn'>
                                                <button>-</button>
                                                <p>0</p>
                                                <button>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>

                            <p className='seeAll'>SEE ALL</p>
                            <hr className='sLine'></hr>
                            </div>

                            <hr className='line'></hr>

                            <div className='reviews'>
                                        <div className='review-heading'>
                                            <h3>Review</h3>
                                            <h2>4.9</h2>
                                            <div>
                                                {arr.map(a =>(<img src={star}></img>))}
                                            </div>
                                            <h6>251 Reviews</h6>
                                        </div>
                                        <div className='addOn'>
                                            {array.map(a =>(
                                                <div className='review-profies'></div>
                                            ))}
                                            <p className='review-seeAll'>+ SEE ALL</p>
                                        </div>

                                        <div className='single-review'>
                                        <div className='profile'>
                                                <div className='profile-pic'></div>
                                                <div className='person'>
                                                    <h6>Vyom Garg</h6>
                                                    <p>Reviewed in June</p>
                                                </div>
                                            </div>
                                            <p className='review-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt libero eu sem varius, nec convallis elit finibus. Vestibulum consectetur justo eu ex scelerisque, ut congue ex dapibus. Morbi vitae vehicula purus. Sed hendrerit euismod justo, in ultrices nunc. Quisque auctor ac massa eget efficitur. Vivamus sed sollicitudin odio.</p>

                                            <div className='review-box'>
                                                {arr.map(a =>(
                                                    <div className='review-profies'></div>
                                                ))}
                                                
                                            </div>

                                        </div>

                                        

                            </div>
                            <hr className='line'></hr>

                            <div className='overview experience'>
                            <h3>Cancelation Policy </h3>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                            </ul>
                        </div>

                </div>
            </div>
            <div className='similarProducts'>
                <h3>Similar Products</h3>
                <div className='flexContainer'>
                {similar.map(p=>(
                    <div className='product' key={p.id}>
                        <img className='product-img' src={p.image}></img>
                        <p className='product-name'>{p.title}{p.id}</p>
                        <div className='product-des'>
                        <p className='price'>₹{p.price}</p>
                        <div className='rating-box'>
                            <p className='rating'>{p.rating}</p>
                        </div>
                    </div>
                    </div>
                ))}

                </div>
            </div>
        </div>
       
    </div>
  )
}

export default SingleProduct