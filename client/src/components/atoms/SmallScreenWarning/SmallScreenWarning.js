import styled from 'styled-components';
import React from 'react';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  padding: 50px;
`;

const SmallScreenWarning = () => (
  <StyledWrapper>
    <Heading light>
      Unfortunatelly, your device is too small to display this app.
      <br /> <br />
      Open it on a PC or on a tablet.
    </Heading>
  </StyledWrapper>
);

export default SmallScreenWarning;
