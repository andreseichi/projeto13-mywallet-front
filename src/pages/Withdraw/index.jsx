import { useState } from 'react';

import { Container, Header, Heading, Form, Input, Button } from './styles';

export function Withdraw() {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  const [isLoading, setIsloading] = useState(false);

  function submitForm(event) {
    event.preventDefault();

    console.log(amount, description);
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
          onChange={(event) => setAmount(event.target.value)}
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
