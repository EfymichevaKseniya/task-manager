import React from 'react';
// import { UserType } from '../../services/api/UsersApi';
import { InputFile } from '../Input/InputFile';

export type UserAvatarType = {
  avatar: string;
};

export const UserAvatar: React.ComponentType<UserAvatarType> = ({ avatar }) => {
  return (
    <div className='userAvatar'>
      <img
        className='userAvatar-img'
        src={avatar}
        alt='изображение пользователя'
      />
      <InputFile
        icon={{ id: 'upload' }}
        context='Загрузить аватар'
        onClick={() => {}}
      />
    </div>
  );
};
