import React from 'react';

const HeaderComponent = ({ title }) => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='#' className='brand-logo'>
          {title}
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='#products'>Products</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderComponent;
