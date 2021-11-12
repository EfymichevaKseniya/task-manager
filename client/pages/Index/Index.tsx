import React, { useEffect } from 'react';
import './index.scss';
import { useAppDispatch, useAppSelector } from '../../store/store';
import fetchTasksContent from '../../store/actions/ActionCreatorsContent';
import Filter from '../../components/Filter/Filter';
import IndexTasksCard from './components/IndexTasks/IndexTasks';
import Header from '../../components/Header/Header';

function Index() {
  const dispatch = useAppDispatch();
  const { contents, isLoading, error } = useAppSelector((state) => state.contentsReducer);
  useEffect(() => {
    dispatch(fetchTasksContent());
  }, []);

  return (
    <>
      <Header />
      <div className='main'>
        <div className='container'>
          <Filter />
          <div className='card'>
            <ul className='card__list'>
              {isLoading && <h2> Идет загрузка </h2>}
              {error && (
                <h2>
                  {error}
                </h2>
              )}
              {Boolean(contents.length) && contents.map((item) => (
                <IndexTasksCard
                  cards={item}
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

export default Index;
