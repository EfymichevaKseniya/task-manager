import React, { forwardRef, HTMLInputTypeAttribute } from 'react';
import { CustomIcon, IconType } from '../Icon/Icon';

import './inputDefault.scss';

export type InputTypeWithIcon = {
  id: string;
  content: string;
  placeholder: string;
  size?: string;
  icon?: IconType;
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: VoidFunction;
  onFocus?: VoidFunction;
  onBlur?: VoidFunction;
  error?: string;
  className?: string;
};

export const InputIcon: React.ComponentType<InputTypeWithIcon> = forwardRef(
  (
    {
      id,
      placeholder,
      content,
      size = 'normal',
      icon,
      type = 'text',
      value,
      onChange,
      onClick = () => {},
      error = '',
      onFocus,
      onBlur,
      className,
    },
    ref: React.ForwardedRef<null>
  ) => {
    return (
      <>
        <div
          className={`input input--${id ?? icon?.id}${`-${
            size ?? ''
          }`} ${className}`}
        >
          <input
            className={`
                  input__text
                  ${`input__text--${id ?? icon?.id}`} 
                  ${`input__text--${size}`} 
                  ${error && 'input__text-error'}
                `}
            type={type}
            placeholder={placeholder}
            id={id}
            name={id}
            onChange={onChange}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
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
