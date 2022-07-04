import { useState, useEffect } from 'react';

import { api } from '../../services/api';
import { Transaction } from '../Transaction';

import {
  Container,
  EmptySummary,
  Transactions,
  Balance,
  TotalAmount,
} from './styles';

export function Summary() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    api
      .get('/transactions', config)
      .then((response) => {
        if (response.status === 200) {
          const balanceAmount = response.data.reduce((acc, transaction) => {
            if (transaction.type === 'income') {
              return acc + Number(transaction.value);
            } else {
              return acc - Number(transaction.value);
            }
          }, 0);
          setBalance(balanceAmount);
          setTransactions(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      {transactions?.length === 0 ? (
        <EmptySummary>Não há registros de entrada ou saída</EmptySummary>
      ) : (
        <>
          <Transactions>
            {transactions.map((transaction) => (
              <Transaction
                key={transaction._id}
                date={transaction.date}
                description={transaction.description}
                value={transaction.value}
                type={transaction.type}
              />
            ))}
          </Transactions>

          <Balance>
            <span>Saldo</span>
            <TotalAmount balance={balance}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(balance)}
            </TotalAmount>
          </Balance>
        </>
      )}
    </Container>
  );
}
