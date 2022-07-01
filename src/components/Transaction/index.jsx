import dayjs from 'dayjs';

import {
  Container,
  Data,
  DateSpan,
  DescriptionSpan,
  ValueSpan,
} from './styles';

export function Transaction({ date, description, value, type }) {
  const dateFormatted = dayjs(date).format('DD/MM');
  const valueFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return (
    <Container>
      <Data>
        <DateSpan>{dateFormatted}</DateSpan>
        <DescriptionSpan>{description}</DescriptionSpan>
      </Data>
      <ValueSpan type={type}>{valueFormatted}</ValueSpan>
    </Container>
  );
}
