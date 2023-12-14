import React,{useState} from 'react'
import location from '../../images/map.png'

const Location = () => {

    const validPincodes = ['110001', '400001', '560001'];

    const [pincode, setPincode] = useState('');
    const [isValidPincode, setIsValidPincode] = useState(null);
  
    const checkPincodeValidity = (enteredPincode) => {
      setIsValidPincode(validPincodes.includes(enteredPincode));
    };
  
    const handlePincodeChange = (e) => {
      const enteredPincode = e.target.value;
      setPincode(enteredPincode);
      checkPincodeValidity(enteredPincode);
    };

  return (
    <div>
    <div className='enterLocation'>
        <div className='locationBox'>
            <img className='mapLogo' src={location}></img>
            <input type="text" value={pincode} onChange={handlePincodeChange} className='locationDes' placeholder='Enter Pincode'></input>
        </div>
    </div>
                            {/* <p className='pin'>Don’t know the Pin Code?</p> */}
    <div>
        {isValidPincode !== null && (
            <p className='pin' style={{ color: isValidPincode ? 'green' : 'red' }}>
                {isValidPincode ? 'Services are provided.' : 'Services are not provided.'}
            </p>
        )}
    </div>
    </div>
  )
}

export default Location