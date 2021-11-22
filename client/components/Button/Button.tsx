import React from 'react';
// import { useHistory } from 'react-router-dom';
import { CustomIcon, IconType } from '../Icon/Icon';
import './button.scss';

export type ButtonType = {
  context?: string;
  icon?: IconType;
  color?: 'primary' | 'blue' | 'red' | 'green' | 'transparent';
  type: 'button' | 'submit';
  size?: 'normal' | 'big' | 'small';
  onClick?: VoidFunction;
  className?: string;
};

export const Button: React.ComponentType<ButtonType> = ({
  context,
  color = 'primary',
  icon,
  type = 'button',
  onClick,
  size = 'normal',
  className,
}) => {
  return (
    <button
      className={`btn ${`btn__${size}` ?? ''} btn--${color} ${className}`}
      onClick={onClick}
      type={type !== 'submit' ? 'button' : 'submit'}
    >
      {
        icon && <CustomIcon {...icon} /> // компонента иконки
      }
      {context ? <span className='btn-text'>{context}</span> : ''}
    </button>
  );
};
