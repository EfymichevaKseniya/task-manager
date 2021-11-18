import React, { useState } from 'react';
import { CheckButton } from '../Button/CheckButton';
import { InputSearch } from '../FormElements/InputSearch';
import DatePicker from '../Input/DatepickerInput';
import './filter.scss';

const Filter: React.FC<unknown> = () => {
  const [isActive, setActive] = useState(false);
  const handleChange = () => {
    setActive(!isActive);
  };
  return (
    <form className='filter'>
      <InputSearch
        inputIcon={{
          id: 'search',
          content: 'Поиск',
          placeholder: 'Введите название имя исполнителя',
          icon: {
            id: 'search',
          },
          type: 'search',
        }}
        icon={{
          id: 'close',
          width: 10,
          height: 10,
        }}
      />
      <DatePicker
        props={{
          content: 'Дата публикации',
          id: 'calendar',
          placeholder: 'Укажите дату',
          type: 'date',
          icon: {
            id: 'calendar',
            width: 16,
            height: 16,
          },
        }}
        // icon={{
        //   id: 'calendar',
        //   width: 10,
        //   height: 10,
        // }}
      />
      <div className='filter__btns'>
        <CheckButton
          modification='video'
          type={{
            type: {
              id: 'video',
              name: 'video',
              width: 10,
              height: 10,
            },
          }}
          checked={isActive}
          onChange={handleChange}
        />
        <CheckButton
          type={{
            type: {
              id: 'photo',
              name: 'photo',
              width: 10,
              height: 10,
            },
          }}
          modification='photo'
          checked={isActive}
          onChange={handleChange}
        />
        <CheckButton
          type={{
            type: {
              id: 'audio',
              name: 'audio',
              width: 10,
              height: 10,
            },
          }}
          modification='audio'
          checked={isActive}
          onChange={handleChange}
        />
        <span className='filter__btns-label input__label'>Тип контента</span>
      </div>
    </form>
  );
};

export default Filter;
