import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ThreeDots } from 'react-loader-spinner';

import { api } from '../../services/api';

import { Container, Header, Heading, Form, Input, Button } from './styles';

export function Income() {
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
      type: 'income',
    };

    setIsloading(true);

    api
      .post('/transactions', inputsObject, config)
      .then((response) => {
        if (response.status === 201) {
          navigate('/home');
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
        <Heading>Nova entrada</Heading>
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
          {isLoading ? (
            <ThreeDots height="auto" color="#fff" />
          ) : (
            'Salvar entrada'
          )}
        </Button>
      </Form>
    </Container>
  );
}
