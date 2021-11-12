import React, { useState } from 'react';
import { CustomIcon, IconType } from '../Icon/Icon';
import { InputTypeWithIcon, InputIcon } from '../Input/InputWithIcon';
import './select.scss';

export type SelectStatusType = {
  args: InputTypeWithIcon,
  icon: IconType,
  id: string;
  selected?: string,
  setSelected?: any
};

export const SelectStatus: React.ComponentType<SelectStatusType> = ({
  id,
  icon,
  args,
  selected,
  setSelected,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className={`select ${`select--${id}` ?? ''}`} onClick={() => setOpen(!isOpen)}>
        <InputIcon
          {...args}
          value={selected}
          onChange={setSelected}
        />
        {
          icon && <CustomIcon {...icon} />
        }
        {
          isOpen
          && (
            <div className='select__dropdown'>
              <ul className={`select__dropdown-content ${isOpen && 'show'} select__dropdown-content--${id}`}>
                <li
                  className='select__dropdown-content__item'
                  key={1}
                >
                  Любой

                </li>
                <li className='select__dropdown-content__item inWork' key={2}>В работе</li>
                <li className='select__dropdown-content__item feedback' key={3}>Ожидает согласования</li>
                <li className='select__dropdown-content__item approved' key={4}>Выполнено</li>
              </ul>
            </div>
          )
        }
      </div>
    </>
  );
};
