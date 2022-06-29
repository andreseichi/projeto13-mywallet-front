import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  color: #fff;
  background-color: #a328d6;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  min-height: 100px;

  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
  }

  span {
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;

    word-spacing: 100vw;
  }
`;
