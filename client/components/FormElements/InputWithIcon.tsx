import React, { forwardRef } from 'react';
import { CustomIcon, IconType } from '../Icon/Icon';

import './inputDefault.scss';

export type InputTypeWithIcon = {
  id: string;
  content: string;
  placeholder: string;
  size?: string;
  icon?: IconType;
  type?:
    | 'text'
    | 'password'
    | 'textarea'
    | 'checkbox'
    | 'email'
    | 'search'
    | 'tel'
    | 'date';
  value?: string | any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  onClick?: VoidFunction;
  error?: string;
};

export const InputIcon: React.ComponentType<InputTypeWithIcon> = forwardRef(
  (
    {
      placeholder,
      content,
      id,
      size = 'normal',
      icon,
      type = 'text',
      value,
      onChange,
      onClick = () => {},
      error = '',
    },
    ref: any
  ) => {
    return (
      <>
        <div className={`input input--${icon && icon.id}${`-${size}` ?? ''} `}>
          <input
            className={`input__text input__text--${icon && icon.id}${
              `-${size}` ?? ''
            } ${error && 'input__text-error'}`}
            type={type}
            placeholder={placeholder}
            id={id}
            name={id}
            onChange={onChange}
            value={value}
            ref={ref}
          />
          <label htmlFor={id} className='input__label'>
            {content}
          </label>
          {icon && <CustomIcon {...icon} onClick={onClick} />}
        </div>
      </>
    );
  }
);
