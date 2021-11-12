import React, { useEffect } from 'react';
import './profile.scss';
import { api } from '../../services/api/UsersApi';
import { UserAvatar } from '../../components/UserAvatar/UserAvatar';
import { Input } from '../../components/Input/InputDefault';
import Header from '../../components/Header/Header';
// import { UserType } from '../../services/api/UsersApi';

function Profile() {
  const [profile, setProfile] = React.useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result: any = await (api.get('/users').then((data) => data));
      setProfile(result.users);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className='main'>
        <div className='container'>
          <div className='profile'>
            <div className='profile__wrapper'>
              <UserAvatar
                avatar={profile.avatar}
              />
              <div className='profile__fields'>
                <Input
                  id='5632'
                  content='Имя, фамилия'
                  placeholder='Введите имя, фамилию'
                />
                <Input
                  id='432'
                  content='E-mail'
                  placeholder='Введите e-mail'
                  type='email'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
