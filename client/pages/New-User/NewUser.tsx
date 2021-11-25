import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from '../../store/store';
import { addNewUser } from '../../store/actions/ActionCreatorsUsers';
import { Input } from '../../components/FormElements/InputDefault';
import { InputIcon } from '../../components/FormElements/InputWithIcon';
import { InputFile } from '../../components/Input/InputFile';
import { Select } from '../../components/Select/Select';
import { ButtonLink } from '../../components/Button/ButtonLink';
import { Button } from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import avatarSrc from '../../../public/img/avatars/default-avatar.svg';
import './new-user.scss';

const NewUser = () => {
  const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector((state) => state.usersReducer);
  const history = useHistory();
  const { handleSubmit, handleChange, values, touched, errors, setFieldValue } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        role: '',
        password: '',
        avatar: '',
      },
      validationSchema: Yup.object({
        email: Yup.string().min(2, 'Поле не может быть пустым').required(),
        name: Yup.string().min(2, 'Поле не может быть пустым').required(),
        password: Yup.string()
          .min(6, 'пароль не может быть меньше 6 символов')
          .required(),
      }),
      onSubmit: (data) => {
        dispatch(addNewUser(data));
        console.log(data);
        history.push('/users');
      },
    });

  const selectChooseHandler = (role: string) => {
    setFieldValue('role', role);
  };

  return (
    <div className='main'>
      <Header />
      <div className='new-user__container container'>
        <section className='new-user'>
          <div className='new-user__back-link'>
            <ButtonLink
              path='users'
              icon={{ id: 'back', width: 23, height: 9 }}
              color='transparent'
            />
            <h1 className='new-user__title'>Пользователь</h1>
          </div>
          <form className='new-user__form' onSubmit={handleSubmit}>
            <div className='new-user__form-wrapper'>
              <div className='new-user__form-avatar'>
                <img
                  className='new-user__form-avatar-img'
                  src={avatarSrc}
                  alt='изображение пользователя'
                />
                <InputFile
                  icon={{ id: 'upload' }}
                  onClick={() => {}}
                  context='Загрузить аватар'
                  value={values.avatar}
                  onChange={() => handleChange}
                />
              </div>
              <div className='new-user__form-fields'>
                <Input
                  id='name'
                  content='Имя, фамилия'
                  placeholder='Введите имя, фамилию'
                  value={values.name}
                  onChange={handleChange}
                  error={values.name}
                />
                <Input
                  id='email'
                  content='E-mail'
                  placeholder='Введите e-mail'
                  type='email'
                  value={values.email}
                  onChange={handleChange}
                  error={values.email}
                />
                <Select
                  fields={{
                    id: 'role',
                    placeholder: 'Выберите роль',
                    content: 'Роль',
                    icon: { id: 'arrow-down', width: 6, height: 4 },
                    error: errors.role,
                    value: `${values.role}`,
                  }}
                  id='role'
                  selected={values.role}
                  onChange={selectChooseHandler}
                  options={...['Администратор', 'Контент-мэйкер', 'Менеджер']}
                />
                <InputIcon
                  id='password'
                  content='Пароль'
                  placeholder='Введите пароль'
                  type='password'
                  value={values.password}
                  onChange={handleChange}
                  error={values.password}
                  icon={{ id: 'not-visible' }}
                />
                {touched.password && errors.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <div className='btn-wrapper'>
                  <Button
                    context='Сохранить'
                    color='blue'
                    type='submit'
                    icon={{ id: 'done' }}
                  />
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default NewUser;
