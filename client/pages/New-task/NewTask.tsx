import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import AirDatepicker from 'air-datepicker';
import { useAppDispatch, useAppSelector } from '../../store/store';
import fetchUsers from '../../store/actions/ActionCreatorsUsers';
import { Input } from '../../components/Input/InputDefault';
import Header from '../../components/Header/Header';
import { Select } from '../../components/Select/Select';
import { Button } from '../../components/Button/Button';
import { ButtonLink } from '../../components/Button/ButtonLink';
import { InputFile } from '../../components/Input/InputFile';
import { InputIcon } from '../../components/Input/InputWithIcon';
import './newTask.scss';

function NewTask() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.usersReducer);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const history = useHistory();
  // const datepicker = new AirDatepicker('#calendar', { dateFormat: 'yyyy-MM-dd' });
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      type: '',
      name: '',
      description: '',
      author: '',
      executor: '',
      dateExpired: '',
    },
    validationSchema: Yup.object({
      type: Yup.string().min(2, 'Поле видео не может быть пустым').required(),
      name: Yup.string().min(2, 'Заголовок не может быть пустым').required(),
      description: Yup.string()
        .min(2, 'Описание не может быть пустым')
        .required(),
      author: Yup.string()
        .min(6, 'Поле инициатора не может быть пустым')
        .required(),
      executor: Yup.string()
        .min(6, 'Поле ответственный не может быть пустым')
        .required(),
      dateExpired: Yup.string()
        .min(6, 'Поле даты не может быть пустым')
        .required(),
    }),
    onSubmit: ({ type, name, description, author, executor, dateExpired }) => {
      console.log(
        `Type: ${type}, name: ${name}, author: ${author}, descr: ${description}, executor: ${executor}, date: ${dateExpired}`
      );
      history.push('/tasks');
    },
  });
  return (
    <>
      <Header />
      <div className='main'>
        <div className='container'>
          <div className='new-task'>
            <div className='btn-wrapper'>
              <ButtonLink
                path='tasks'
                context='К списку задач'
                icon={{ id: 'back', width: 23, height: 9 }}
                color='transparent'
              />
            </div>
            <form className='new-task__form' onSubmit={handleSubmit}>
              <div className='new-task__wrapper'>
                <Select
                  field={{
                    id: 'type',
                    placeholder: 'Выберите тип контента',
                    content: 'Тип контента',
                    value: `${values.type}`,
                    icon: { id: 'arrow-down', width: 6, height: 4 },
                    error: errors.type,
                  }}
                  options={...['Видео', 'Аудио', 'Фото']}
                />
                <Input
                  id='name'
                  content='Заголовок'
                  placeholder='Введите заголовок задачи'
                  value={values.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Input
                  id='description'
                  content='Описание'
                  placeholder='Опишите требования'
                  type='textarea'
                  value={values.description}
                  onChange={handleChange}
                  error={errors.description}
                />
                <InputFile
                  icon={{ id: 'clip' }}
                  onClick={() => {}}
                  context='Прикрепить файл'
                />
              </div>
              <div className='new-task__sidebar'>
                <div className='new-task__sidebar-wrapper'>
                  <InputIcon
                    id='calendar'
                    content='Дата публикации'
                    placeholder='Укажите дату публикации'
                    icon={{ id: 'calendar' }}
                    type='date'
                    value={values.dateExpired}
                    onChange={handleChange}
                    // onClick={() => datepicker}
                    error={errors.dateExpired}
                  />
                  <Select
                    field={{
                      id: 'author',
                      placeholder: 'Выберите инициатора',
                      content: 'Инициатор',
                      value: `${values.author}`,
                      icon: { id: 'arrow-down', width: 6, height: 4 },
                      error: errors.author,
                    }}
                    options={users.map((user) => user.name)}
                  />
                  <Select
                    field={{
                      id: 'executor',
                      placeholder: 'Выберите ответственного',
                      content: 'Ответственный',
                      value: `${values.executor}`,
                      icon: { id: 'arrow-down', width: 6, height: 4 },
                      error: errors.executor,
                    }}
                    options={users.map((user) => user.name)}
                  />
                  {/* {touched.type && errors.name && errors.author && errors.description
                && errors.dateExpired ? (
                  <div>{errors.author}</div>
                    ) : null} */}
                </div>
              </div>
              <div className='btn-wrapper'>
                <Button
                  context='Сохранить'
                  color='blue'
                  type='submit'
                  icon={{ id: 'done' }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewTask;
