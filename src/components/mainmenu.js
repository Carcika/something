import React from 'react';
import { menuList } from './menuList';
import MenuItems from './menuItems';
import '../styles/mainmenu.css'

function mainmenu() {
  return (
      <div>
          <h1 className='title'>Our menu</h1>
          <div className='menu'>{menuList.map((menu, key) => {
            return <MenuItems
              key={key}
              name={menu.name}
              image={menu.img}
              price={menu.price}
          />
            })}</div>
      </div>
  );
}

export default mainmenu;
