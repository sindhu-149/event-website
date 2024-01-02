import React, {useState, useEffect} from 'react'
import './singleProduct.css'
import star from '../../images/Star.png'
import Calendar from '../calendar/Calendar'
import Location from '../location/Location'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';






const SingleProduct = ({productData, singleproduct}) => {

    const arr=[1,2,3,4,5]
    const cust =[1,2,3]
    const pro= [1,2,3,4,5,6,7,8]
    const array=[1,2,3,4,5,6,7]


    const cat = singleproduct.category
    const unique = singleproduct._id
    const similar = productData.filter(c => c.category === cat && c._id !== unique)
    console.log(similar);


    const [checkedStates, setCheckedStates] = useState(cust.map(() => false));

    const handleToggle = (index) => {
      const newCheckedStates = [...checkedStates];
      newCheckedStates[index] = !newCheckedStates[index];
      setCheckedStates(newCheckedStates);
    };
    


    const navigate = useNavigate();


    // Function to handle similar item click
        const handleSimilarItemClick = (productId) => {
            // Navigate to the new URL
            window.location.href = `/single-product/${productId}`;
          };
        
          // Scroll to top on component re-render
          useEffect(() => {
            window.scrollTo(0, 0);
          }, [singleproduct]); // You can adjust the dependency array based on when you want to scroll to top
        
          // ...
        
    
  return (
    <div className='sindhu'>
        
        <div className='productNavigation'>Home</div>
        <div className='singleProduct-box'>
            <div className='aboutProduct'>
                <div className='singleProduct'>
                    <div className='productImageBox'>
                            <img className='pro-image' src={singleproduct.photo}></img>
                                {/* <div className='addOn'>
                                    {arr.map(a =>(
                                        <img className='adds'></img>
                                    ))}
                                </div> */}
                    </div>
                    <p className='item-price'>₹{singleproduct.price}</p>
                </div>

                <div className='description'>
                    <div className='des-type'>
                        <p className='des-content-types'>Overview</p>
                        <p className='des-content-types'>Reviews</p>
                        <p className='des-content-types'>Inclusions</p>
                    </div>

                    <p className='nameOfProduct'></p>

                    <div className='productRating'>
                        <div className='rate'>{singleproduct.rating}</div>
                        <span>125 Reviews</span>
                        {/* <img src={path}></img> */}
                        <ArrowForwardIosIcon className='rightArrow' />
                    </div>

                    <div className='selectLoaction'>

                        <form>
                            <Location />
                           
                            <Calendar />

                            <div className='customize'>
                            <h3>Customize your experience</h3>
                            <div className='customize-box'>
                                {cust.map((_, index) => (
                                <div className='c-box' key={index}>
                                    <div className='c-img'></div>
                                    <div className='customeDes'>
                                    <h4>Lorem Ipsum</h4>
                                    <p>Lorem ipsum </p>
                                    <div className='cust'>
                                        <p>₹0000</p>
                                        <label className={`switch ${checkedStates[index] ? 'checked' : ''}`}>
                                        <input
                                            type="checkbox"
                                            onChange={() => handleToggle(index)}
                                            checked={checkedStates[index]}
                                        />
                                        <span className="slider round"></span>
                                        </label>
                                    </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            <p className='seeAll'>SEE ALL</p>
                            <hr className='sLine'></hr>
                            </div>
                            
                            <div className='deliveryCharges'>
                                <p className='deliveryText'>Delivery Charges</p>
                                <p className='deliveryText'>₹{singleproduct.price}</p>
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
                                <DoneIcon className='doneIcons'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='inclusionText'>
                                <DoneIcon className='doneIcons'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='inclusionText'>
                                <DoneIcon className='doneIcons'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='inclusionText'>
                                <DoneIcon className='doneIcons'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='inclusionText'>
                                <DoneIcon className='doneIcons'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='inclusionText'>
                                <CloseIcon className='closeIcon'/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                            <div className='inclusionText'>
                                <CloseIcon className='closeIcon'/>
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


                        {/* <div className='customize'>
                            <h3>Customize your experience</h3>
                            <div className='customize-box'>
                                {cust.map(a =>(
                                    <div className='c-box'>
                                    <div className='c-img'></div>
                                    <div className='customeDes'>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Lorem ipsum </p>
                                        <div className='cust'>
                                            <p>₹0000</p>
                                            <label className={`switch ${isChecked ? 'checked' : ''}`}>
                                            <input type="checkbox" onChange={handleToggle} checked={isChecked} />
                                            <span className="slider round"></span>
                                        </label>
                                        </div>
                                        
                                    </div>
                                </div>
                                ))}
                            </div>
                            <p className='seeAll'>SEE ALL</p>
                            <hr className='sLine'></hr>
                            </div> */}
                            

                            


                            <div className='reviews'>
                                        <div className='review-heading'>
                                            <h3>Review</h3>
                                            <h2>4.9</h2>
                                            <div>
                                                {arr.map(a =>(<img src={star}></img>))}
                                            </div>
                                            <h6>251 Reviews</h6>
                                        </div>
                                        {/* <div className='addOn'>
                                            {array.map(a =>(
                                                <div className='review-profies'></div>
                                            ))}
                                            <p className='review-seeAll'>+ SEE ALL</p>
                                        </div> */}
                                        {cust.map(a => (

                                       
                                        <div className='single-review'>
                                        <div className='profile'>
                                                <div className='profile-pic'></div>
                                                <div className='person'>
                                                    <h6>Vyom Garg</h6>
                                                    <p>Reviewed in June</p>
                                                </div>
                                            </div>
                                            <p className='review-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt libero eu sem varius, nec convallis elit finibus. Vestibulum consectetur justo eu ex scelerisque, ut congue ex dapibus. Morbi vitae vehicula purus. Sed hendrerit euismod justo, in ultrices nunc. Quisque auctor ac massa eget efficitur. Vivamus sed sollicitudin odio.</p>

                                            {/* <div className='review-box'>
                                                {arr.map(a =>(
                                                    <div className='review-profies'></div>
                                                ))}
                                                
                                            </div> */}

                                        </div>
                                        ))}

                                        

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
                    <Link to={`/single-product/${p._id}`} className='navStyle'>
                    <div className='product' key={p.id} onClick={() => handleSimilarItemClick(p._id)}>
                        <img className='product-img' src={p.image}></img>
                        <p className='product-name'>{p.title}{p.id}</p>
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
        </div>
       
    </div>
  )
}

export default SingleProduct