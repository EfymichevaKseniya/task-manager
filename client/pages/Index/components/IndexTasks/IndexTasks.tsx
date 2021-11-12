import React from 'react';
import { IndexTaskType } from '../../../../domain/task';
import { Content } from '../../../../components/Content/Content';
import './indexTasks.scss';

const IndexTasksCard: React.FC<{
  cards: IndexTaskType;
  onClick?: (id: number) => void;
}> = ({ cards }) => {
  return (
    <li className='card__item'>
      <figure className='card__item-wrapper'>
        <img className='card__item-img' src={cards.preview} alt={cards.name} />
        <figcaption className='card-descr'>
          <a className='card__item-title' href='task.html' onClick={(e) => e.preventDefault()}>
            <Content
              type={
                cards.type
              }
            />
          </a>
          <p className='card__item-descr'>
            {cards.name}
          </p>
          <div className='card__item-meta'>
            <span className='card__item-author'>
              {cards.author.name}
            </span>
            <time className='card__item-date' dateTime={cards.dateCreated}>
              {(new Date(cards.dateCreated)).toLocaleString()}
            </time>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

export default IndexTasksCard;
