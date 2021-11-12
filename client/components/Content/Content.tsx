import React from 'react';
import { CustomIcon } from '../Icon/Icon';
import './content.scss';
import serviceAdapter from '../../services/adapterForMediaContent';
import changesIconService from '../../services/iconAdapter';

export type ContentType = {
  type: {
    id: number | string;
    name: string;
    width?: number;
    height?: number;
  }
  time?: string;
};

export const Content: React.ComponentType<ContentType> = ({
  type,
  time,
}) => {
  const newType = serviceAdapter(type);
  const newIcon = changesIconService(type);
  return (
    <div className={`content content__box content__box--${newType.name}`} key={newType.id}>
      <CustomIcon {...newIcon} />
      <span className={`content__box-text content__box-text--${newType.name}`}>
        {newType.text}
      </span>
      {
        time && <span className={`content__box-${time}`}>{time}</span>
      }
    </div>
  );
};
