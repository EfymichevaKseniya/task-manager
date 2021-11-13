import React from 'react';
import logo from '../../../public/img/logo.svg';

const Logo: React.ComponentType = () => {
  return (
    <img
      className='logo'
      src={logo}
      alt='Две стрелки как проекция голубая над зеленой'
    />
  );
};

export default Logo;
