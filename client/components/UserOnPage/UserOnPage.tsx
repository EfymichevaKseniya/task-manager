import './userOnPage.scss';
import React from 'react';
import { ListGenerate } from '../ListGenerate/ListGenerate';

export type UserOnPageType = {
  avatar: string;
  id: number;
  name: string;
  onClick: VoidFunction;
};

export const UserOnPage: React.ComponentType<UserOnPageType> = ({
  avatar,
  id,
  name,
  onClick,
}) => {
  const [toggle, setToggle] = React.useState(false);
  const clickTogglekHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div className='user' key={id}>
      <span className='user__name'>{name}</span>
      <button
        className='user__btn'
        type='button'
        onClick={() => {
          onClick();
          clickTogglekHandler();
        }}
      >
        <img
          className='user__avatar'
          src={avatar}
          alt='изображение пользователя'
        />
      </button>
      <div className='dropdown'>
        <ul
          className={`dropdown__content dropdown__content--avatar ${
            toggle ? 'show' : ''
          }`}
        >
          <ListGenerate
            items={...[
              { title: 'Профиль', type: 'profile' },
              { title: 'Выход', type: 'auth' },
            ]}
            className='dropdown__content-item'
          />
        </ul>
      </div>
    </div>
  );
};
