import React, { useEffect } from 'react';
import './tasks.scss';
import FilterTasks from '../../components/Filter/FilterTasks';
import TasksCard from './components/CardsOfTasks/CardsOfTasks';
import { useAppDispatch, useAppSelector } from '../../store/store';
import fetchTasks from '../../store/actions/ActionCreatorsTasks';
import { TaskType } from '../../domain/task';
import { ButtonLink } from '../../components/Button/ButtonLink';
import Header from '../../components/Header/Header';

function Tasks() {
  const dispatch = useAppDispatch();
  const { tasks, isLoading, error } = useAppSelector((state) => state.tasksReducer);
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <>
      <Header />
      <div className='main'>
        <div className='container'>
          <div className='task'>
            <FilterTasks />
            <div className='task__btn'>
              <ButtonLink
                color='blue'
                path='new-task'
                icon={{ id: 'new-task' }}
                context='Новая задача'
              />
            </div>
            <div className='cardTasks'>
              <ul className='cardTasks__list'>
                {isLoading && <h2> Идет загрузка </h2>}
                {error && (
                <h2>
                  {error}
                </h2>
                )}

                {Boolean(tasks.length) && tasks.map((item: TaskType) => (
                  <TasksCard
                    {...item}
                    key={item.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tasks;
