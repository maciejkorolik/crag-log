import styled from 'styled-components';

const Heading = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme, slim }) => (slim ? theme.regular : theme.bold)};
  color: ${({ theme, light }) => (light ? theme.white : theme.color1)};
  margin: 0;
`;

export default Heading;
