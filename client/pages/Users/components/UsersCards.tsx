import React from 'react';
import { Button } from '../../../components/Button/Button';
import { UserType } from '../../../domain/user';
import './usersCards.scss';
import AdapterForRole from '../../../services/adapterForRole';
import { ButtonLink } from '../../../components/Button/ButtonLink';

const UsersCards: React.FC<UserType> = ({ id, name, email, avatar, role }) => {
  const newType = AdapterForRole(role);
  return (
    <li className='users__item'>
      <div className='users__item-info'>
        <img
          className='users__item-avatar'
          src={avatar}
          alt='аватар пользователя'
        />
        <span className='users__item-name'>{name}</span>
      </div>
      <span className='users__item-email'>{email}</span>
      <span className='users__item-role'>{newType.name ?? ''}</span>
      <div className='users__item-buttons'>
        <ButtonLink
          path={`user/:${id}`}
          icon={{ id: 'edit', width: 20, height: 20 }}
          color='primary'
          size='small'
        />
        <Button
          type='button'
          icon={{ id: 'delete' }}
          color='primary'
          size='small'
        />
      </div>
    </li>
  );
};

export default UsersCards;
