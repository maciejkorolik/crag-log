import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0;
  background-color: ${({ theme }) => theme.color4};
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 50px;
  font-family: 'Oswald', sans-serif;
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.color5};
      color: ${({ theme }) => theme.darkgrey};
      width: 110px;
      height: 35px;
      font-size: ${({ theme }) => theme.fontSize.xs};
    `}
`;

export default Button;
