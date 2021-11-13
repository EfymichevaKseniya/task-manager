import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../../components/Input/InputDefault';
import { Button } from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';

import './auth.scss';

const Login = () => {
  const history = useHistory();
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, 'Password should be longer than 6 characters')
        .required(),
    }),
    onSubmit: ({ email, password }) => {
      console.log(`E-mail: ${email}, password: ${password}`);
      history.push('/index');
    },
  });

  return (
    <div className='main'>
      <div className='container'>
        <div className='auth'>
          <Logo />
          <form className='auth__wrapper' onSubmit={handleSubmit}>
            <h3 className='auth__wrapper-title'>Вход</h3>
            <Input
              id='email'
              content='E-mail'
              placeholder='Введите e-mail'
              type='email'
              value={values.email}
              onChange={handleChange}
            />
            <Input
              id='password'
              content='Пароль'
              placeholder='Введите пароль'
              type='password'
              value={values.password}
              onChange={handleChange}
            />
            {touched.password && errors.password ? (
              <div>{errors.password}</div>
            ) : null}
            <Button
              context='Войти'
              icon={{ id: 'lock', width: 18, height: 18 }}
              color='blue'
              type='submit'
              onClick={() => {}}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
