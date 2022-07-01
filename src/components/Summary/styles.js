import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background-color: #fff;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;

  gap: 14px;

  padding: 24px 12px 12px 12px;
`;

export const EmptySummary = styled.span`
  width: 75%;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #868686;
`;

export const Balance = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  text-transform: uppercase;
  color: #000;
`;

export const TotalAmount = styled.span`
  color: ${({ balance }) => (balance > 0 ? '#03AC00' : '#C70000')};
  font-weight: 400;
`;
