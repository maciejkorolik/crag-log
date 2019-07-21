import styled from 'styled-components';

const Input = styled.input`
  padding: 15px 30px;
  font-family: 'Poppins', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.color5};
  border: none;
  border-radius: 50px;

  ::placeholder {
    letter-spacing: 1px;
    font-weight: ${({ theme }) => theme.light};
    color: ${({ theme }) => theme.color2};
  }
`;

export default Input;
