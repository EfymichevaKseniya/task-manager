import React from 'react';
import { Button } from '../../../../components/Button/Button';
import { ButtonLink } from '../../../../components/Button/ButtonLink';
import { Content } from '../../../../components/Content/Content';
import './cardsOfTasks.scss';
import AdapterForStatus from '../../../../services/adapterForStatus';
import { CustomIcon } from '../../../../components/Icon/Icon';
import { TaskType } from '../../../../domain/task';

const TasksCard: React.FC<TaskType> = ({
  id,
  name,
  executor,
  type,
  status,
  dateExpired,
}) => {
  const newType = AdapterForStatus(status);
  return (
    <li className='cardTasks__item'>
      <div className='cardTasks__item-content'>
        <Content type={type} />
        <span className='cardTasks__item-title'>{name}</span>
      </div>
      <div className='cardTasks__item-status'>
        <span className='cardTasks__item-status-auth'>{executor.name}</span>
        <time
          className='cardTasks__item-status-due'
          dateTime={new Date(dateExpired).toLocaleString()}
        >
          <CustomIcon id='calendar' />
          {new Date(dateExpired).toLocaleString('ru-Ru', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          })}
        </time>
        <span className={`cardTasks__item-status-text ${newType.name}`}>
          {newType.text}
        </span>
      </div>
      {newType.name !== 'approved' ? (
        <div className='cardTasks__item-buttons'>
          <ButtonLink
            path={`profile/:${id}`}
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
      ) : (
        ''
      )}
    </li>
  );
};

export default TasksCard;
