import React, { useState } from 'react';
import { CheckButton } from '../Button/CheckButton';
import DatePicker from '../Input/DatepickerInput';
import { SelectStatus } from '../Select/SelectStatus';
import { InputSearch } from '../FormElements/InputSearch';
import './filter.scss';

const FilterTasks: React.FC<unknown> = () => {
  const [isActive, setActive] = useState(false);
  const handleChange = () => {
    setActive(!isActive);
  };
  return (
    <form className='filter filter__tasks'>
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
      />
      <SelectStatus
        id='status'
        args={{
          id: 'status',
          content: 'Статус',
          placeholder: 'Выберите статус',
        }}
        icon={{ id: 'arrow-down', width: 6, height: 4 }}
      />
      <DatePicker
        props={{
          id: 'calendar',
          content: 'Дата публикации',
          placeholder: 'Укажите дату',
          icon: {
            id: 'calendar',
            width: 16,
            height: 16,
          },
          size: 'small',
        }}
      />
      <div className='filter__btns' id='filter__btns'>
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
          onClick={handleChange}
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
          onClick={handleChange}
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
          onClick={handleChange}
        />
        <span className='filter__btns-label input__label'>Тип контента</span>
      </div>
    </form>
  );
};

export default FilterTasks;
