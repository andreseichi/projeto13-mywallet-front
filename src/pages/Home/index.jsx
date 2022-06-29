import { FiLogOut } from 'react-icons/fi';

// import { ThreeDots } from 'react-loader-spinner';
import { Summary } from '../../components/Summary';

import { Container, Header, Greeting, TransactionsInput } from './styles';

import { TransactionInput } from '../../components/TransactionInput';

export function Home() {
  // const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <Greeting>Olá, Tashiro</Greeting>
        <FiLogOut />
      </Header>

      <Summary />

      <TransactionsInput>
        <TransactionInput type="deposit" text="Nova Entrada" to="/deposit" />
        <TransactionInput type="withdraw" text="Nova Saída" to="/withdraw" />
      </TransactionsInput>
    </Container>
  );
}
