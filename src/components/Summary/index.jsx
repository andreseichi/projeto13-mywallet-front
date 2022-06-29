import { useState } from 'react';
import { Container, EmptySummary } from './styles';

export function Summary() {
  const [transactions, setTransactions] = useState([]);

  return (
    <Container>
      {transactions?.length === 0 ? (
        <EmptySummary>Não há registros de entrada ou saída</EmptySummary>
      ) : (
        <span>tem coisa</span>
      )}
    </Container>
  );
}
