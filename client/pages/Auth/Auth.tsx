import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../../components/FormElements/InputDefault';
import { Button } from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';

import './auth.scss';

const Login = () => {
  const history = useHistory();
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues: {
      email: 'das@gdfg.yjyut',
      password: 'trgfhf65',
    },
    validationSchema: Yup.object({
      email: Yup.string().required(),
      password: Yup.string()
        .min(6, 'Пароль должен содержать не менее 6 символов')
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
              error={errors.email}
              touched={touched.email}
            />
            <Input
              id='password'
              content='Пароль'
              placeholder='Введите пароль'
              type='password'
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              touched={touched.password}
            />
            {/* {touched.password && errors.password ? (
              <div>{errors.password}</div>
            ) : null} */}
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
