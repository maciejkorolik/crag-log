import styled from 'styled-components';

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color2};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  text-decoration: none;
  padding: 0;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media (max-width: 760px) {
    width: 40px;
    height: 40px;
  }
`;

export default IconButton;
