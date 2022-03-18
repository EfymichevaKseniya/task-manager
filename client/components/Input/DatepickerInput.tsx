import React, { useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import './datepicker.scss';
import { InputIcon, InputTypeWithIcon } from '../FormElements/InputWithIcon';

export type DatepickerInputType = {
  props: InputTypeWithIcon;
  onClick?: VoidFunction;
  onChange?: (data: string) => void;
  value?: string;
};

const DatePicker: React.ComponentType<DatepickerInputType> = ({
  props,
  onClick,
  onChange = () => {},
}) => {
  const [startDate, setStartDate] = useState('');
  useEffect(() => {
    onChange(startDate);
  }, [startDate]);

  return (
    <div className='input__wrapper' onClick={onClick}>
      <ReactDatePicker
        locale={ru}
        selected={startDate}
        onChange={(date: string) => setStartDate(date)}
        wrapperClassName='datePicker'
        dateFormat='dd.MM.yyyy'
        placeholderText={props.placeholder}
        customInput={
          <InputIcon
            {...props}
            value={startDate}
            onChange={() => setStartDate(startDate)}
          />
        }
      />
    </div>
  );
};

export default DatePicker;
