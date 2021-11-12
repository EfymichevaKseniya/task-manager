import React, { useEffect } from 'react';
import './users.scss';
import { useAppDispatch, useAppSelector } from '../../store/store';
import fetchUsers from '../../store/actions/ActionCreatorsUsers';
import FilterUsers from '../../components/Filter/FilterUsers';
import Header from '../../components/Header/Header';
import { ButtonLink } from '../../components/Button/ButtonLink';
import UsersCards from './components/UsersCards';

function Tasks() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.usersReducer);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <Header />
      <div className='main'>
        <div className='container'>
          <FilterUsers />
          <div className='users'>
            <div className='users__btn'>
              <ButtonLink
                color='blue'
                path='new-user'
                icon={{ id: 'new-task' }}
                context='Добавить пользователя'
              />
            </div>
            <ul className='users__list'>
              {isLoading && <h2> Идет загрузка </h2>}
              {error && (
                <h2>
                  {error}
                </h2>
              )}
              {Boolean(users.length) && users.map((item) => (
                <UsersCards
                  {...item}
                  key={item.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tasks;
