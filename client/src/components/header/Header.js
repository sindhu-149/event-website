// import React from 'react';
// import './header.css'; // Import your CSS file
// import category from '../../data/category.json'
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const Header = () => {
//   const jsonData =[
//     {
//       "cat": "birthday decor",
//       "data": {
//         "decor": ["a", "b", "c"],
//         "experience": [1, 2, 3]
//       }
//     },
//     {
//       "cat": "cakes",
//       "data": {
//         "decor": ["a", "b", "c"],
//         "experience": [1, 2, 3]
//       }
//     },
//     {
//       "cat": "aniversary",
//       "data": {
//         "items": ["aa", "bb", "cc"]
//       }
//     },
//     {
//       "cat": "flowers",
//       "data": {
//         "by_feature": ["aa", "bb", "cc"],
//         "by_occasion": ["1a", "1b", "1c"],
//         "by_type": ["s", "j"]
//       }
//     }
//   ]


//   const renderData = (category) => {
//     const { data } = category;

//     return (
//       <div  className="subnav-content">
//       <div className='content-row'>
//         {Object.keys(data).map(key => (
          
//           <div key={key} className='column'>
//             <h5>{key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}</h5>
//             {/* <ul> */}
//               {data[key].map(item => (
//                 <p key={item}>{item}</p>
//               ))}
//             {/* </ul> */}
//           </div>
         
//         ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="sub-navbar">
//       {jsonData.map(item => (
//         <div key={item.cat} className="subnav ">
//           {/* <h2>{item.cat}</h2> */}
//           <div className="subnavbtn nav-links">{item.cat} <KeyboardArrowDownIcon  className='downArrow'/></div>
//           {renderData(item)}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Header;


import React from 'react';
import './header.css'; // Import your CSS file
import jsonData from '../../data/cat.json';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Demo = () => {


  const renderData = (category) => {
    const { data, image } = category;

    return (
      <div className="subnav-content">
        <div className="content-row">
          
          {Object.keys(data).map((key) => (
            <div key={key} className="column">
              <h5>{key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}</h5>
              {data[key].map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          ))}
          <div className="column">
            <img src={image} alt={category.cat} className="category-image" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="sub-navbar">
      {jsonData.map((item) => (
        <div key={item.cat} className="subnav">
          <div className="subnavbtn nav-links">
            {item.cat} <KeyboardArrowDownIcon className="downArrow" />
          </div>
          {renderData(item)}
        </div>
      ))}
    </div>
  );
};

export default Demo;
