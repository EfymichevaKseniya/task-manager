import React, { useState } from 'react';
import iconSvg from '../../../public/img/icons/icon.svg';
import './icon.scss';

export type IconType = {
  id: string;
  width?: number;
  height?: number;
  idAdd?: number | string;
  onClick?: VoidFunction;
};

export const CustomIcon: React.ComponentType<IconType> = ({
  id = '',
  width = 16,
  height = 16,
  idAdd = '',
  onClick = () => {},
}) => {
  const [active, setActive] = useState(false);
  const handleIconClick = () => {
    setActive(!active);
    onClick();
  };

  const addIcon = () => {
    let additionalIcon;
    if (idAdd) {
      additionalIcon = (
        <use
          className={`icon__path ${active ? '' : 'hidden'}`}
          xlinkHref={`${iconSvg}#${idAdd}`}
        />
      );
    }
    return additionalIcon;
  };
  return (
    <svg
      className={`icon icon--${id}`}
      style={{ width: width ?? '', height: height ?? '' }}
      onClick={handleIconClick}
    >
      <use
        xlinkHref={`${iconSvg}#${id}`}
        className={`icon__path ${active && idAdd ? 'hidden' : ''}`}
      />
      {addIcon}
    </svg>
  );
};
