import styled, { css } from 'styled-components';

const Input = styled.input`
  padding: 10px 20px;
  font-family: 'Poppins', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme, value }) => (value ? 'black' : theme.color3)};
  background-color: ${({ theme }) => theme.color5};
  border: none;
  border-radius: 50px;
  width: ${({ width }) => width || '100%'};

  &::placeholder {
    font-weight: ${({ theme }) => theme.light};
    color: ${({ theme }) => theme.color3};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 1px ${({ theme }) => theme.color4};
  }
  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xs};
      padding: 6px 15px;
      margin: 10px 0;
    `}
`;

export default Input;
