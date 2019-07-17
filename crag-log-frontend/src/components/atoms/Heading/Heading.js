import styled from 'styled-components';

const Heading = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.medium};
  margin-top: 0;
`;

export default Heading;
