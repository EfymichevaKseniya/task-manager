import React from 'react';
import { NavLink } from 'react-router-dom';

export type ListGenerateType = {
  items: Array<{ title: string, type: string }>
  className: string
};

export const ListGenerate: React.ComponentType<ListGenerateType> = ({
  items,
  className,
}) => {
  return (
    <>
      {
        items.map((item) => {
          return (
            <li className={`${className}`} key={`${item.title + 1}`}>
              <NavLink to={`/${item.type}`} className={`${className}-link`} activeClassName={`${className}-link--active`}>{item.title}</NavLink>
            </li>
          );
        })
      }
    </>
  );
};
