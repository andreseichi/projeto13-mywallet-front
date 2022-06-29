import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: auto;
  padding: 24px 24px 16px 24px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

export const Heading = styled.h2`
  font-weight: 700;
  font-size: 26px;
  line-height: 32px;

  color: #ffffff;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;

  margin-top: 32px;
`;

export const Input = styled.input`
  width: 100%;
  background: #ffffff;
  border-radius: 5px;

  color: #000;
  font-size: 20px;
  line-height: 25px;

  padding: 18px 14px;

  outline: none;

  &[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    margin: 0;
  }

  :disabled {
    background: #f2f2f2;
  }

  ::placeholder {
    color: #000;
  }
`;

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
