import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

import { Container } from './styles';

export function TransactionInput({ type, text, to }) {
  return (
    <Container to={to}>
      {type === 'deposit' ? <FiPlusCircle /> : <FiMinusCircle />}
      <span>{text}</span>
    </Container>
  );
}
