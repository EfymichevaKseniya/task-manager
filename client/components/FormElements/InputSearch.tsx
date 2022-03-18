import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../Button/Button';
import './inputSearch.scss';
import useOutsideClick from '../../services/useClickOutside';
import { InputIcon, InputTypeWithIcon } from './InputWithIcon';

export type InputTypeSearch = {
  inputIcon: InputTypeWithIcon;
  onClick?: VoidFunction;
  value?: string;
  onChange?: (data: string) => void;
};

export const InputSearch: React.ComponentType<InputTypeSearch> = ({
  inputIcon,
  onChange = () => {},
}) => {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleClick = (elem: string) => {
    setValue('');
    (document.querySelector(elem) as HTMLInputElement)?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const rootEl = useRef(null);

  useOutsideClick(rootEl, () => {
    setIsActive(false);
  });

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <div className='search__box' ref={rootEl}>
      <InputIcon
        {...inputIcon}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsActive(true)}
        className={isActive ? 'input__search--active' : ''}
      />
      <Button
        type='button'
        color='transparent'
        onClick={() => handleClick('.input__text--search')}
        icon={{
          id: 'close',
          width: 10,
          height: 10,
        }}
        className={`search__box-btn__reset ${isActive ? 'show' : ''}`}
      />
      {/* {icon && (
        <div className={`search__box-icon ${isActive ? 'show' : ''}`}>
          <CustomIcon {...icon} onClick={() => { setIsActive(true); setValue('');}} />
        </div>
      )} */}
    </div>
  );
};
