import React, { useEffect, useState, useRef } from 'react';
// import { UserType } from '../../store/models/IUser';
import { InputTypeWithIcon, InputIcon } from '../FormElements/InputWithIcon';
import useOutsideClick from '../../services/useClickOutside';
import './select.scss';

export type SelectType = {
  id: string;
  fields: InputTypeWithIcon;
  options: string[];
  size?: string;
  onClick?: VoidFunction;
  selected?: string;
  onChange?: (data: string) => void;
};

export const Select: React.ComponentType<SelectType> = ({
  size = '',
  options,
  onChange = () => {},
  fields,
  id = '',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState('');

  const rootEl = useRef(null);

  useOutsideClick(rootEl, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  // [] - 1 раз когда компонент создается
  // [...] - вызывается каждый раз, когда обновилась зависимость
  // in body -> return () => {} // функция возвращаемая выполнится, тогда когда компонент destroy

  return (
    <>
      <div
        className={`select ${size && `select--${size}`}`}
        onClick={() => setIsOpen(!isOpen)}
        ref={rootEl}
      >
        <InputIcon {...fields} value={selected} onChange={() => setSelected} />
        {isOpen && (
          <div className='select__dropdown'>
            <ul
              className={`select__dropdown-content select__dropdown-content--${id} ${
                isOpen && 'show'
              }`}
            >
              {options.map((item, i) => {
                return (
                  <li
                    className='select__dropdown-content__item'
                    key={`${i + 9482348}`}
                    onClick={() => {
                      setSelected(item);
                      setIsOpen(false);
                    }}
                  >
                    <span
                      className={`select__dropdown-content__text ${
                        selected === item && 'selected'
                      } `}
                    >
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
