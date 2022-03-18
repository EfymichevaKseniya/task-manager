import React, { useEffect, useState } from 'react';
import { RoleType } from '../../domain/roleType';
import { Content, ContentType } from '../Content/Content';
import { CustomIcon, IconType } from '../Icon/Icon';
import './checkButton.scss';

export type CheckButtonType = {
  type?: ContentType;
  modification?: ContentName;
  context?: string;
  onChange?: (data: boolean) => void;
  onClick?: (data: unknown) => void;
  // onChange?: VoidFunction;
  // onClick?: VoidFunction;
  userRole?: RoleType['key'] | 'all';
  checked?: boolean;
  isActive?: boolean;
  icon?: IconType;
  color?: Color;
};

export const CheckButton: React.ComponentType<CheckButtonType> = ({
  type,
  modification = 'video',
  onChange = () => {},
  onClick = () => {},
  context,
  userRole = 'all',
  icon,
  color = '',
}) => {
  const [isActive, setIsActive] = useState(false);
  // const handleChangeCheckbox = () => {
  //   setActive(!isActive);
  // };

  useEffect(() => {
    onChange(isActive);
  }, [isActive]);

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
        onChange={() => setIsActive(!isActive)}
      />
      {type && <Content {...type} />}
      {context && (
        <div
          className={`checkbox__content ${
            color ?? `checkbox__content--${color}`
          }`}
        >
          {icon && <CustomIcon {...icon} />}
          <span className='checkbox__text'>{context}</span>
        </div>
      )}
    </label>
  );
};
