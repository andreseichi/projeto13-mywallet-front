import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import { useUser } from '../../hooks/useUser';

import { api } from '../../services/api';

import {
  Container,
  Logo,
  Form,
  Input,
  Button,
  LinkStyled,
  LoginError,
} from './styles';

export function Login() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const { loginUser } = useUser();

  const navigate = useNavigate();

  function handleForm(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  function submitForm(event) {
    event.preventDefault();

    setIsloading(true);

    api
      .post('/sign-in', inputs)
      .then((response) => {
        if (response.status === 200) {
          const { token, name } = response.data;

          localStorage.setItem('token', token);
          loginUser(name);
          navigate('/home');
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          setIsError(true);
        }
        setIsloading(false);
      });
  }

  return (
    <Container>
      <Logo>MyWallet</Logo>

      <Form onSubmit={(event) => submitForm(event)} disabled={isLoading}>
        <Input
          placeholder="E-mail"
          type="email"
          name="email"
          onChange={handleForm}
          value={inputs.email}
          required
          disabled={isLoading}
        />
        <Input
          placeholder="Senha"
          type="password"
          name="password"
          onChange={handleForm}
          value={inputs.password}
          required
          disabled={isLoading}
        />

        {isError ? <LoginError>E-mail ou senha incorretas!</LoginError> : ''}

        <Button onSubmit={(event) => submitForm(event)} disabled={isLoading}>
          {isLoading ? <ThreeDots height="auto" color="#fff" /> : 'Entrar'}
        </Button>
      </Form>

      <LinkStyled to="/sign-up">Não tem uma conta? Cadastre-se</LinkStyled>
    </Container>
  );
}
