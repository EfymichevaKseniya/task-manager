import React from 'react';
import { FilterType } from '../../domain/filter';
// import { FilterType } from './Filter';

export type InjectedProps = {
  filter?: FilterType;
  onChange?: (data: FilterType) => void;
};

export function withInjectedProp<TOriginalProps extends {}>(
  Component: React.FunctionComponent<TOriginalProps & InjectedProps>
): React.FunctionComponent<TOriginalProps> {
  const hocComponent: React.FC<TOriginalProps> = (props) => (
    <Component {...props} />
  );
  return hocComponent;
}

// export type WrappedFilterType = {
//   Children: React.ReactNode | JSX.Element,
// }

// export const WrappedFilter: React.FC<WrappedFilterType> = (Children, initialValues: any) => {
//   const [filter, setFilter] = useFilterQuery<FilterType>(initialValues);

//   const handleChangeFilter = () => {
//     setFilter(filter);
//   }
//     return (
//       <Children />
//     );
// }
