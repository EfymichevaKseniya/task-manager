import React from 'react';
import { InputCheckbox } from '../Input/InputCheckbox';
import { InputIcon } from '../Input/InputWithIcon';
import './filter.scss';

const FilterUsers: React.FC<unknown> = () => {
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
      <div className='filter__btns' id='filter__btns'>
        <InputCheckbox
          context='Все'
          onClick={() => {}}
          userRole='all'
          defaultChecked
        />
        <InputCheckbox
          context='Контент-мейкер'
          onClick={() => {}}
          userRole='contentMaker'
        />
        <InputCheckbox
          context='Менеджер'
          onClick={() => {}}
          userRole='manager'
        />
        <InputCheckbox
          context='Администратор'
          onClick={() => {}}
          userRole='admin'
        />
        <span className='filter__btns-label input__label'>Роль</span>
      </div>
    </form>
  );
};

export default FilterUsers;
