import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: auto;
  padding: 24px 24px 16px 24px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #fff;

  svg {
    height: 24px;
    width: 24px;

    cursor: pointer;
  }
`;

export const Greeting = styled.h2`
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;

  color: #ffffff;
`;

export const TransactionsInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

export const NewDeposit = styled(Link)``;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  background: #a328d6;
  border-radius: 5px;

  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: #fff;

  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};

  cursor: pointer;
`;

export const LinkStyled = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;

  margin-top: 36px;

  color: #fff;
`;
