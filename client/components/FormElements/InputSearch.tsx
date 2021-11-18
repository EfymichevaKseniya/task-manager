import React, { useState } from 'react';
import { CustomIcon, IconType } from '../Icon/Icon';
import './inputSearch.scss';
import { InputIcon, InputTypeWithIcon } from './InputWithIcon';

export type InputTypeSearch = {
  inputIcon: InputTypeWithIcon;
  onClick?: VoidFunction;
  icon: IconType;
  value?: string;
  onChange?: (data: string) => void;
};

export const InputSearch: React.ComponentType<InputTypeSearch> = ({
  inputIcon,
  icon,
}) => {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | string) => {
    setValue(e.target?.value);
  };
  return (
    <div className='search__box' onClick={handleClick}>
      <InputIcon {...inputIcon} value={value} onChange={handleChange} />
      {icon && (
        <div className={`search__box-icon ${isActive ? 'show' : ''}`}>
          <CustomIcon {...icon} onClick={() => setValue('')} />
        </div>
      )}
    </div>
  );
};
