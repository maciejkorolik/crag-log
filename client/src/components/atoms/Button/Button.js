import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.color1};
  min-width: 150px;
  height: 50px;
  border: none;
  border-radius: 50px;
  font-family: 'Open Sans', sans-serif;
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.fontSize.m};
  cursor: pointer;
  @media (max-width: 760px) {
    height: 35px;
    min-width: 120px;
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 1px ${({ theme }) => theme.color4};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.color2};
      color: ${({ theme }) => theme.darkgrey};
      min-width: 120px;
      height: 35px;
      padding: 0 15px;
      font-weight: ${({ theme }) => theme.semibold};
      font-size: ${({ theme }) => theme.fontSize.s};
    `}
`;

export default Button;
