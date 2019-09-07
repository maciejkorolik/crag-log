import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.h1`
  font-family: poppins, sans-serif;
  font-size: 3em;
  color: white;
`;

const LoadingIndicator = () => (
  <StyledWrapper>
    <StyledText>Loading...</StyledText>
  </StyledWrapper>
);

export default LoadingIndicator;
