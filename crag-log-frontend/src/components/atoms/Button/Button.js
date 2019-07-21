import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0;
  background-color: ${({ theme }) => theme.color1};
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 50px;
  font-family: 'Open Sans', sans-serif;
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.fontSize.m};
  cursor: pointer;
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25); */

  &:focus {
    outline: none;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.color2};
      color: ${({ theme }) => theme.darkgrey};
      width: 121px;
      height: 33px;
      font-weight: ${({ theme }) => theme.semibold};
      font-size: ${({ theme }) => theme.fontSize.s};
    `}
`;

export default Button;
