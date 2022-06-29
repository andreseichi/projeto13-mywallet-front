import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: auto;
  margin-inline: 24px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.h1`
  font-family: 'Saira Stencil One';
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;

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

export const LinkStyled = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;

  margin-top: 36px;

  color: #fff;
`;
