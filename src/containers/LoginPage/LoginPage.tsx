import React, { useState } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Button, FormHelperText, TextField, Typography } from '@mui/material';
import { TiInputChecked } from 'react-icons/ti';
import { BsBoxArrowLeft } from 'react-icons/bs';
import users from '../../users.json';
import classNames from 'classnames';

const loginPageValidate = yup.object().shape({
  loginValue: yup.string().nullable().email().required('Введите свой email'),
  passwordValue: yup.string().nullable().max(10).min(5).required('ERROR...'),
});

interface ICredentials {
  loginValue: string;
  passwordValue: string;
}

const LoginPage = (props): JSX.Element => {
  const formMethod = useForm<ICredentials>({
    defaultValues: {
      loginValue: '',
      passwordValue: '',
    },
    resolver: yupResolver(loginPageValidate),
    mode: 'onSubmit',
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = formMethod;

  const submit = (values: ICredentials) => {};

  const [style, setStyle] = useState(false);
  const [text, setText] = useState('');
  const [click, setClick] = useState(false);
  const [password, setPassword] = useState('');

  const handleClick = () => {
    setStyle(!style);
    setClick(!click);
  };

  const foundEmail = users.find((item) => {
    return item.email === text;
  });

  const handleBackClick = () => {
    setClick(!click);
    setStyle(!style);
  };

  return (
    <>
      <form
        className={classNames('login', { none: foundEmail && style && password.length > 5 })}
        onSubmit={handleSubmit(submit)}>
        <FormProvider {...formMethod}>
          <Box display="flex" flexDirection="column" alignItems="center" gap="15px">
            <Typography variant="h2" component="h3" color="grey">
              Login
            </Typography>
            <Box>
              <Controller
                control={control}
                name="loginValue"
                render={({ field, fieldState: { error } }) => (
                  <>
                    <TextField
                      {...field}
                      label="email"
                      type="email"
                      error={!!error}
                      value={text}
                      onChange={(e) => {
                        setText(e.target.value);
                      }}
                    />
                    {!!error && (
                      <FormHelperText error>{errors['loginValue']?.message}</FormHelperText>
                    )}
                  </>
                )}
              />
            </Box>
            <Box>
              <Controller
                control={control}
                name="passwordValue"
                render={({ field, fieldState: { error } }) => (
                  <>
                    <TextField
                      {...field}
                      label="password"
                      type="password"
                      error={!!error}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    {!!error && <FormHelperText error>Введите свой пароль</FormHelperText>}
                  </>
                )}
              />
            </Box>
            <Button variant="contained" type="submit" onClick={handleClick}>
              Sign in
            </Button>
            <Button variant="outlined" onClick={() => reset()}>
              Reset
            </Button>
          </Box>
        </FormProvider>
      </form>
      <div
        className={classNames('visible', {
          unvisible: !foundEmail || !click,
        })}>
        <div className="visible__block-1">
          <TiInputChecked size={100} color="orange" />
          <h2>Successfully authorized!</h2>
        </div>
        <div className="visible__block-2">
          <BsBoxArrowLeft size={50} cursor="pointer" onClick={handleBackClick} />
          <h4>Tap to get back</h4>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
