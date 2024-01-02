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
