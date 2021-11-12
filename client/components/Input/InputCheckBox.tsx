import React from 'react';
import { Content, ContentType } from '../Content/Content';
import './inputCheckbox.scss';

export type InputCheckboxType = {
  type?: ContentType,
  modification?: 'video' | 'audio' | 'photo';
  context?: string;
  onClick: VoidFunction;
  userRole?: 'admin' | 'contentMaker' | 'manager' | 'all';
  defaultChecked?: boolean
};

export const InputCheckbox: React.ComponentType<InputCheckboxType> = ({
  type,
  modification = '',
  onClick,
  context,
  userRole = 'all',
  defaultChecked = false,
}) => {
  return (
    <label className={`checkbox__btn checkbox__btn--${modification || userRole}`} onClick={onClick} htmlFor={modification || userRole}>
      <input className='checkbox__input' type='checkbox' name={modification || userRole} id={modification || userRole} defaultChecked={defaultChecked} />
      {
        type && <Content {...type} />
      }
      {
        context && <span className='checkbox__text'>{context}</span>
      }
    </label>
  );
};
