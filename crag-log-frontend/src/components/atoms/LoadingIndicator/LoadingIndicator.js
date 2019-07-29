import styled from 'styled-components';

const LoadingIndicator = styled.h1`
  font-family: poppins, sans-serif;
  font-size: 3em;
  color: white;
  position: fixed;
  top: 40vh;
  left: 40%;
  z-index: 100000;

  ::before {
    content: '';
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 300vw;
    height: 200vh;
    top: -100vh;
    left: -100vw;
  }
`;

export default LoadingIndicator;
