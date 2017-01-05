import React from 'react';

import './header.styl';

const Header = ({city}) => {
  return (
    <div className='header-container'>
      <a href="#" className='header-container__logo'>Russian events</a>
      <span className='header-container__text'>{'Events in ' + city}</span>
    </div>
  );
};

export default Header;
