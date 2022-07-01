import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  font-size: 16px;
  line-height: 20px;
  color: #000;
`;

export const Data = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;

  gap: 8px;
`;

export const DateSpan = styled.span`
  color: #c6c6c6;
`;

export const DescriptionSpan = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ValueSpan = styled.span`
  color: ${({ type }) => (type === 'income' ? '#03AC00' : '#C70000')};
`;
