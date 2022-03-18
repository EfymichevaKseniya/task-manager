import React, { useState } from 'react';
import { useFormik } from 'formik';
import { CheckButton } from '../Button/CheckButton';
import { InputSearch } from '../FormElements/InputSearch';
import DatePicker from '../Input/DatepickerInput';
import { FilterType } from '../../domain/filter';
import './filter.scss';

export type FilterChangeType = {
  onChange?: (data: FilterType) => void;
};

const Filter: React.FC<FilterType & FilterChangeType> = (filter) => {
  const [params, setParams] = useState(filter);
  console.log(params);

  const handleChangeForm = (data: FilterType) => {
    // onChange(data);
    setParams(data);
  };

  const { values, setFieldValue } = useFormik({
    initialValues: filter,
    onSubmit: () => {},
  });

  return (
    <form className='filter' onChange={() => handleChangeForm(values)}>
      <InputSearch
        inputIcon={{
          id: 'search',
          content: 'Поиск',
          placeholder: 'Введите название имя исполнителя',
          icon: {
            id: 'search',
          },
          type: 'search',
        }}
        value={values.searchText}
        onChange={(e) => setFieldValue('searchText', e)}
      />
      <DatePicker
        props={{
          content: 'Дата публикации',
          id: 'calendar',
          placeholder: 'Укажите дату',
          icon: {
            id: 'calendar',
            width: 16,
            height: 16,
          },
        }}
        value={values.date}
        onChange={(e) => setFieldValue('date', e)}
      />
      <div className='filter__btns'>
        {Object.entries(values.checkboxes).map(([key, value]) => {
          return (
            <CheckButton
              key={key}
              modification={key}
              type={{
                type: {
                  id: key,
                  name: key,
                  width: 10,
                  height: 10,
                },
              }}
              checked={value}
              onChange={(e) => setFieldValue(`checkboxes.${key}`, e)}
            />
          );
        })}
        {/* <CheckButton
          modification='video'
          type={{
            type: {
              id: 'video',
              name: 'video',
              width: 10,
              height: 10,
            },
          }}
          checked={isActive}
          onChange={handleChange}
        />
        <CheckButton
          type={{
            type: {
              id: 'photo',
              name: 'photo',
              width: 10,
              height: 10,
            },
          }}
          modification='photo'
          checked={isActive}
          onChange={handleChange}
        />
        <CheckButton
          type={{
            type: {
              id: 'audio',
              name: 'audio',
              width: 10,
              height: 10,
            },
          }}
          modification='audio'
          checked={isActive}
          onChange={handleChange}
        /> */}
        <span className='filter__btns-label input__label'>Тип контента</span>
      </div>
    </form>
  );
};

export default Filter;
