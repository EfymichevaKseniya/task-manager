import React from 'react';
import './404.scss';
import { ButtonLink } from '../../components/Button/ButtonLink';
import Header from '../../components/Header/Header';

const PageNotFoundImg = require('../../../public/img/404.svg');

function PageNotFound() {
  return (
    <>
      <Header />
      <div className='main'>
        <div className='container'>
          <div className='page__notFound'>
            <img className='page__notFound-img' src={PageNotFoundImg} alt='ошибка 404' />
            <h3 className='page__notFound-title'>Потерялись?</h3>
            <span className='page__notFound-description'>Страница, которую вы ищите не существует, либо была удалена</span>
            <ButtonLink
              context='На главную'
              icon={{ id: 'home', width: 18, height: 18 }}
              color='blue'
              path='index'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
