import { Summary } from '../../components/Summary';
import { TransactionInput } from '../../components/TransactionInput';
import { LogOut } from '../../components/LogOut';

import { useUser } from '../../hooks/useUser';

import { Container, Header, Greeting, TransactionsInput } from './styles';

export function Home() {
  const { user } = useUser();

  return (
    <Container>
      <Header>
        <Greeting>Olá, {user}</Greeting>
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
