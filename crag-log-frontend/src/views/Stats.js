import React from 'react';
import styled from 'styled-components';
import AppTemplate from 'templates/AppTemplate';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WIPinfo = styled.h2`
  font-size: 60px;
  color: white;
`;

const Stats = () => (
  <AppTemplate>
    <StyledWrapper>
      <WIPinfo>Page under construction :(</WIPinfo>
    </StyledWrapper>
  </AppTemplate>
);

export default Stats;
