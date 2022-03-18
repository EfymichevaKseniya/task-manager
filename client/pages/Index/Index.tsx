import React, { useEffect } from 'react';
import './index.scss';
import { useAppDispatch, useAppSelector } from '../../store/store';
import fetchTasksContent from '../../store/actions/ActionCreatorsContent';
import Filter from '../../components/Filter/Filter';
// import { FilterType } from '../../domain/filter';
import IndexTasksCard from './components/IndexTasks/IndexTasks';
import Header from '../../components/Header/Header';
import { withInjectedProp } from '../../components/Filter/WrappedFilter';
import useFilterQuery from '../../services/useFilterQuery';

const initialValues = {
  searchText: '',
  date: '',
  checkboxes: { video: false, photo: false, audio: false },
};

const WrappedFilter = withInjectedProp(Filter);

function Index() {
  const dispatch = useAppDispatch();
  const { contents, isLoading, error } = useAppSelector(
    (state) => state.contentsReducer
  );
  const [filter, setFilter] = useFilterQuery(initialValues);

  useEffect(() => {
    dispatch(fetchTasksContent());
  }, []);

  // useEffect(() => {
  //   setFilter(filter)
  // }, [filter])

  const handleUrlChange = () => {
    setFilter(filter);
  };

  console.log(filter);

  return (
    <>
      <Header />
      <div className='main'>
        <div className='container'>
          <WrappedFilter {...filter} onChange={handleUrlChange} />
          <div className='card'>
            <ul className='card__list'>
              {isLoading && <h2> Идет загрузка </h2>}
              {error && <h2>{error}</h2>}
              {Boolean(contents.length) &&
                contents.map((item) => (
                  <IndexTasksCard cards={item} key={item.id} />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
