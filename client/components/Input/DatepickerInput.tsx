import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import './datepicker.scss';
import { InputIcon, InputTypeWithIcon } from '../FormElements/InputWithIcon';

export type DatepickerInputType = {
  props: InputTypeWithIcon;
  onClick?: VoidFunction;
  onChange?: (data: Date) => void;
};

const DatePicker: React.ComponentType<DatepickerInputType> = ({
  props,
  onClick,
}) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='input__wrapper' onClick={onClick}>
      <ReactDatePicker
        locale={ru}
        selected={startDate}
        onChange={(date: Date) => {
          setStartDate(date);
        }}
        wrapperClassName='datePicker'
        dateFormat='yyyy-MM-dd'
        placeholderText={props.placeholder}
        customInput={<InputIcon {...props} />}
      />
    </div>
  );
};

export default DatePicker;
