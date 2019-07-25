import styled from 'styled-components';

const Select = styled.select`
  display: block;
  padding: 6px 5px 6px 15px;
  margin: 10px 0;
  font-family: 'Poppins', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme, value }) => (value ? theme.regular : theme.light)};
  color: ${({ theme, value }) => (value ? 'black' : theme.color3)};
  text-align: center;
  background-color: ${({ theme }) => theme.color5};
  border: none;
  border-radius: 20px;
  width: ${({ width }) => width || 'auto'};
  resize: none;

  > option {
    color: black;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 1px ${({ theme }) => theme.color4};
  }
`;

export default Select;
