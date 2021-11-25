import React, { HTMLInputTypeAttribute } from 'react';
import './inputDefault.scss';

export type InputType = {
  id: string;
  content: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
  touched?: boolean;
};

export const Input: React.ComponentType<InputType> = ({
  id = '',
  content,
  placeholder,
  type = 'text',
  value,
  onChange,
  error = '',
  touched = false,
}) => {
  return (
    <>
      <div className='input'>
        <input
          className={`
                input__text 
                input__text--${id} 
                ${touched && error ? 'input__text--error' : ''}
              `}
          type={type}
          placeholder={placeholder}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
        />
        <label htmlFor={id} className='input__label'>
          {content}
        </label>
      </div>
    </>
  );
};
