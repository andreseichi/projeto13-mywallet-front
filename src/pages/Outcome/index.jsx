import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Header, Heading, Form, Input, Button } from './styles';

export function Outcome() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsloading] = useState(false);

  function submitForm(event) {
    event.preventDefault();

    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    const inputsObject = {
      value: amount,
      description,
      type: 'outcome',
    };

    setIsloading(true);

    api
      .post('/transactions', inputsObject, config)
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
      <Header>
        <Heading>Nova saída</Heading>
      </Header>

      <Form onSubmit={(event) => submitForm(event)} disabled={isLoading}>
        <Input
          placeholder="Valor"
          type="number"
          name="amount"
          onChange={(event) => setAmount(+event.target.value)}
          value={amount}
          required
        />
        <Input
          placeholder="Descrição"
          type="text"
          name="description"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          required
        />

        <Button onSubmit={(event) => submitForm(event)} disabled={isLoading}>
          Salvar saída
          {/* {isLoading ? <ThreeDots height="auto" color="#fff" /> : 'Entrar'} */}
        </Button>
      </Form>
    </Container>
  );
}
