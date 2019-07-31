import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  margin: 0 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  ${({ bigger }) =>
    bigger &&
    css`
      font-weight: ${({ theme }) => theme.light};
      font-size: ${({ theme }) => theme.fontSize.m};
    `}
`;

export default Paragraph;
