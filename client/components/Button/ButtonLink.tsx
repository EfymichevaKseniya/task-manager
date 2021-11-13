import React from 'react';
import { Link } from 'react-router-dom';
import { CustomIcon, IconType } from '../Icon/Icon';
import './button.scss';

export type ButtonLinkType = {
  context?: string;
  icon?: IconType;
  color?: 'primary' | 'blue' | 'red' | 'green' | 'transparent';
  path: string;
  size?: 'normal' | 'big' | 'small';
  onClick?: VoidFunction;
};

export const ButtonLink: React.ComponentType<ButtonLinkType> = ({
  context,
  color = 'primary',
  icon,
  path = '/',
  onClick,
  size = 'normal',
}) => {
  return (
    <Link
      to={`/${path}`}
      className={`btn btn__${size} btn--${color}`}
      onClick={onClick}
    >
      {icon && <CustomIcon {...icon} />}
      {context ? <span className='btn-text'>{context}</span> : ''}
    </Link>
  );
};
