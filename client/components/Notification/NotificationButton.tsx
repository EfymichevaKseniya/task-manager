import React from 'react';
import { CustomIcon, IconType } from '../Icon/Icon';
import './notification.scss';

export type NotificationButtonType = {
  icon: IconType;
  notificationCount?: number | string;
  onClick: VoidFunction;
};

export const NotificationButton: React.ComponentType<NotificationButtonType> = ({
  icon,
  notificationCount,
  onClick,
}) => {
  return (
    <div className='notification'>
      <a className='notification__button' href='/#' onClick={(e) => { e.preventDefault(); onClick(); }}>
        <CustomIcon {...icon} />
        {
          notificationCount && <span className='notification__button-number'>{notificationCount}</span>
        }
      </a>
    </div>
  );
};
