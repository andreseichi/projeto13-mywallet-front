import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { ThreeDots } from 'react-loader-spinner';

import { api } from '../../services/api';

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

    const inputsObject = {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
    };

    setIsloading(true);

    api
      .post('/sign-up', inputsObject)
      .then((response) => {
        if (response.status === 201) {
          navigate('/');
        }
      })
      .catch((error) => {
        console.log(error);
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

      <LinkStyled to="/">Já tem uma conta? Entre agora!</LinkStyled>
    </Container>
  );
}
