import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background-color: #fff;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;

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
