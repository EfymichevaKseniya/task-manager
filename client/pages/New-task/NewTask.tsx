import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../store/store';
import fetchUsers from '../../store/actions/ActionCreatorsUsers';
import { Input } from '../../components/FormElements/InputDefault';
import Header from '../../components/Header/Header';
import { Select } from '../../components/Select/Select';
import { Button } from '../../components/Button/Button';
import { ButtonLink } from '../../components/Button/ButtonLink';
import { InputFile } from '../../components/Input/InputFile';
import './newTask.scss';
import DatePicker from '../../components/Input/DatepickerInput';

function NewTask() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.usersReducer);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const history = useHistory();
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
    onSubmit: (data) => {
      console.log(data);
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
                  fields={{
                    id: 'type',
                    placeholder: 'Выберите тип контента',
                    content: 'Тип контента',
                    value: `${values.type}`,
                    icon: { id: 'arrow-down', width: 6, height: 4 },
                    error: errors.type,
                  }}
                  id='type'
                  options={['Видео', 'Аудио', 'Фото']}
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
                  <DatePicker
                    props={{
                      id: 'calendar',
                      content: 'Дата публикации',
                      placeholder: 'Укажите дату публикации',
                      icon: {
                        id: 'calendar',
                        width: 16,
                        height: 16,
                      },
                      type: 'date',
                    }}
                  />
                  <Select
                    fields={{
                      id: 'author',
                      placeholder: 'Выберите инициатора',
                      content: 'Инициатор',
                      value: `${values.author}`,
                      icon: { id: 'arrow-down', width: 6, height: 4 },
                      error: errors.author,
                    }}
                    id='author'
                    options={users.map((user) => user.name)}
                  />
                  <Select
                    fields={{
                      id: 'executor',
                      placeholder: 'Выберите ответственного',
                      content: 'Ответственный',
                      value: `${values.executor}`,
                      icon: { id: 'arrow-down', width: 6, height: 4 },
                      error: errors.executor,
                    }}
                    id='executor'
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
