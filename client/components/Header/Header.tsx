import React from 'react';
import Logo from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import { NotificationButton } from '../Notification/NotificationButton';
import { UserOnPage } from '../UserOnPage/UserOnPage';
// import { UserType } from '../../services/api/UsersApi';
import './header.scss';

const userAvatar = require('../../../public/img/profile-photo.png');

// const currentUser: UserType = JSON.parse(sessionStorage.getItem('user'));

const Header: React.FC<unknown> = () => {
  return (
    <div className='header'>
      <div className='header__container container'>
        <div className='header__wrapper'>
          <div className='header__wrapper-left__side'>
            <Logo />
            <Menu
              role={{
                id: 0,
                name: 'admin',
              }}
            />
          </div>
          <div className='header__wrapper-right__side'>
            <NotificationButton
              icon={{
                id: 'bell',
                width: 20,
                height: 20,
              }}
              notificationCount={3}
              onClick={() => {}}
            />
            <UserOnPage
              id={0}
              avatar={userAvatar}
              name='Семён Щеглов'
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
