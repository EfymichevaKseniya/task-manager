import React from 'react';
import iconSvg from '../../../public/img/icons/icon.svg';
import './icon.scss';

export type IconType = {
  id: string;
  width?: number;
  height?: number;
  idAdd?: number | string;
};

export const CustomIcon: React.ComponentType<IconType> = ({
  id = '',
  width = 16,
  height = 16,
  idAdd = '',
}) => {
  return (
    <svg
      className={`icon icon--${id}`}
      style={{ width: width ?? '', height: height ?? '' }}
    >
      <use xlinkHref={`${iconSvg}#${id}`} />
      {idAdd && <use className='hidden' xlinkHref={`${iconSvg}#${idAdd}`} />}
    </svg>
  );
};
