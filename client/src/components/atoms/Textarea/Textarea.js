import styled from 'styled-components';

const Textarea = styled.textarea`
  padding: 10px 15px;
  margin: 10px 0;
  font-family: 'Poppins', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.color5};
  border: none;
  border-radius: 20px;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  resize: none;

  &::placeholder {
    font-weight: ${({ theme }) => theme.light};
    color: ${({ theme }) => theme.color3};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 1px ${({ theme }) => theme.color4};
  }
`;

export default Textarea;
