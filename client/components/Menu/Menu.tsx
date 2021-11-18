import React from 'react';
import { ListGenerate } from '../ListGenerate/ListGenerate';
import './menu.scss';

export type MenuType = {
  role: {
    id: number;
    name: 'admin' | 'manager' | 'contentMaker';
  };
  location?: string;
};

export const Menu: React.ComponentType<MenuType> = ({ role }) => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {role.name !== 'admin' ? (
          <ListGenerate
            items={...[
              { title: 'Главная', type: 'index' },
              { title: 'Задачи', type: 'tasks' },
            ]}
            className='nav__item'
          />
        ) : (
          <ListGenerate
            items={...[
              { title: 'Главная', type: 'index' },
              { title: 'Задачи', type: 'tasks' },
              { title: 'Пользователи', type: 'users' },
            ]}
            className='nav__item'
          />
        )}
      </ul>
    </nav>
  );
};
