import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { ThreeDots } from 'react-loader-spinner';

import {
  Container,
  Logo,
  Form,
  Input,
  PasswordInput,
  PasswordConfirmSpan,
  Button,
  LinkStyled,
} from './styles';

import axios from 'axios';

export function SignUp() {
  const [inputs, setInputs] = useState({
    name: 'a',
    email: 'a@a.com',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsloading] = useState(false);
  const [isPasswordEqual, setIsPasswordEqual] = useState(true);

  const navigate = useNavigate();

  function handleForm(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  function submitForm(event) {
    event.preventDefault();

    if (inputs.password !== inputs.confirmPassword) {
      setIsPasswordEqual(false);
      return;
    } else {
      setIsPasswordEqual(true);
    }

    setIsloading(true);

    axios
      .post(
        'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',
        inputs
      )
      .then((response) => {
        if (response.status === 201) {
          navigate('/login');
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
        setIsloading(false);
      });
  }

  return (
    <Container>
      <Logo>MyWallet</Logo>

      <Form onSubmit={(event) => submitForm(event)} disabled={isLoading}>
        <Input
          placeholder="Nome"
          type="text"
          name="name"
          onChange={handleForm}
          value={inputs.name}
          required
          disabled={isLoading}
        />
        <Input
          placeholder="E-mail"
          type="email"
          name="email"
          onChange={handleForm}
          value={inputs.email}
          required
          disabled={isLoading}
        />
        <PasswordInput
          placeholder="Senha"
          type="password"
          name="password"
          onChange={handleForm}
          value={inputs.password}
          required
          disabled={isLoading}
          isPasswordEqual={isPasswordEqual}
        />
        <PasswordInput
          placeholder="Confirme a senha"
          type="password"
          name="confirmPassword"
          onChange={handleForm}
          value={inputs.confirmPassword}
          required
          disabled={isLoading}
          isPasswordEqual={isPasswordEqual}
        />

        {!isPasswordEqual ? (
          <PasswordConfirmSpan>Senhas não são iguais!</PasswordConfirmSpan>
        ) : (
          ''
        )}

        <Button onSubmit={(event) => submitForm(event)} disabled={isLoading}>
          Cadastrar
          {/* {isLoading ? <ThreeDots height="auto" color="#fff" /> : 'Entrar'} */}
        </Button>
      </Form>

      <LinkStyled to="/login">Já tem uma conta? Entre agora!</LinkStyled>
    </Container>
  );
}
