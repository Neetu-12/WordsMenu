import React from 'react';
import './cards.css';

const Cards = (prop) => {
  return (
    <div className='mainCardContainer'>
      <div className="cardContainer">
        <img src={prop.url} alt="Something went wrong !" className='maggiImg' />
        <h5>{prop.title}</h5>
        <div className="disc">{prop.description}</div>
      </div>
    </div>
  )
}

export default Cards;