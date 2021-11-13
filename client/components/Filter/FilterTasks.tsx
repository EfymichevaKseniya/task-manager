import React from 'react';
import { InputCheckbox } from '../Input/InputCheckbox';
import { InputIcon } from '../Input/InputWithIcon';
import { SelectStatus } from '../Select/SelectStatus';
import './filter.scss';

const FilterTasks: React.FC<unknown> = () => {
  return (
    <form className='filter filter__tasks'>
      <InputIcon
        id='search'
        content='Поиск'
        placeholder='Введите название имя исполнителя'
        icon={{
          id: 'search',
          idAdd: 'close',
        }}
        type='search'
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
      <InputIcon
        id='calendar'
        content='Дата публикации'
        placeholder='Укажите дату'
        icon={{ id: 'calendar' }}
        size='small'
        type='date'
      />
      <div className='filter__btns' id='filter__btns'>
        <InputCheckbox
          modification='video'
          type={{
            type: {
              id: 'video',
              name: 'video',
              width: 10,
              height: 10,
            },
          }}
          onClick={() => {}}
        />
        <InputCheckbox
          type={{
            type: {
              id: 'photo',
              name: 'photo',
              width: 10,
              height: 10,
            },
          }}
          modification='photo'
          onClick={() => {}}
        />
        <InputCheckbox
          type={{
            type: {
              id: 'audio',
              name: 'audio',
              width: 10,
              height: 10,
            },
          }}
          modification='audio'
          onClick={() => {}}
        />
        <span className='filter__btns-label input__label'>Тип контента</span>
      </div>
    </form>
  );
};

export default FilterTasks;
