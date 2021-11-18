import React from 'react';
import { Content, ContentType } from '../Content/Content';
import { CustomIcon, IconType } from '../Icon/Icon';
import './checkButton.scss';

export type CheckButtonType = {
  type?: ContentType;
  modification?: 'video' | 'audio' | 'photo';
  context?: string;
  onChange?: VoidFunction;
  onClick?: VoidFunction;
  userRole?: 'admin' | 'contentMaker' | 'manager' | 'all';
  checked?: boolean;
  isActive?: boolean;
  icon?: IconType;
  color?: string;
};

export const CheckButton: React.ComponentType<CheckButtonType> = ({
  type,
  modification = '',
  onChange = () => {},
  onClick = () => {},
  context,
  userRole = 'all',
  isActive,
  icon,
  color,
}) => {
  return (
    <label
      className={`checkbox__btn checkbox__btn--${modification || userRole}`}
      onClick={onClick}
      htmlFor={modification || userRole}
    >
      <input
        className='checkbox__input'
        type='checkbox'
        name={modification || userRole}
        id={modification || userRole}
        checked={isActive}
        onClick={onClick}
        onChange={onChange}
      />
      {type && <Content {...type} />}
      {context && icon && (
        <div
          className={`checkbox__content ${
            color ?? `checkbox__content--${color}`
          }`}
        >
          <CustomIcon {...icon} />
          <span className='checkbox__text'>{context}</span>
        </div>
      )}
      {context && (
        <span
          className={`checkbox__text ${color ?? `checkbox__content--${color}`}`}
        >
          {context}
        </span>
      )}
    </label>
  );
};
