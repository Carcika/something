import React from 'react';

function menuItems({name, image, price}) {
  return (
    <div className='menuItem'>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <p>{name}</p>
        <h1>${price}</h1>
    </div>
  );
}

export default menuItems;
