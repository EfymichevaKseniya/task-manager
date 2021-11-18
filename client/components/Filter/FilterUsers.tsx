import React, { useState } from 'react';
import { CheckButton } from '../Button/CheckButton';
import { InputIcon } from '../FormElements/InputWithIcon';
import './filter.scss';

const FilterUsers: React.FC<unknown> = () => {
  const [isActive, setActive] = useState(false);
  const handleChange = () => {
    setActive(!isActive);
  };
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
        <CheckButton
          context='Все'
          userRole='all'
          checked={isActive}
          onChange={handleChange}
        />
        <CheckButton
          context='Контент-мейкер'
          onClick={() => {}}
          userRole='contentMaker'
          checked={isActive}
          onChange={handleChange}
        />
        <CheckButton
          context='Менеджер'
          onClick={() => {}}
          userRole='manager'
          checked={isActive}
          onChange={handleChange}
        />
        <CheckButton
          context='Администратор'
          onClick={() => {}}
          userRole='admin'
          checked={isActive}
          onChange={handleChange}
        />
        <span className='filter__btns-label input__label'>Роль</span>
      </div>
    </form>
  );
};

export default FilterUsers;
