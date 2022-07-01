import { Summary } from '../../components/Summary';
import { TransactionInput } from '../../components/TransactionInput';

import { LogOut } from '../../components/LogOut';

import { Container, Header, Greeting, TransactionsInput } from './styles';

export function Home() {
  return (
    <Container>
      <Header>
        <Greeting>Olá, Tashiro</Greeting>
        <LogOut />
      </Header>

      <Summary />

      <TransactionsInput>
        <TransactionInput type="income" text="Nova Entrada" to="/income" />
        <TransactionInput type="outcome" text="Nova Saída" to="/outcome" />
      </TransactionsInput>
    </Container>
  );
}
