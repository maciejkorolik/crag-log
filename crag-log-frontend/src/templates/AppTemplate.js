import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import backgroundPattern from 'assets/topography.svg';
import TopBar from 'components/organisms/TopBar.js/TopBar';

const StyledWrapper = styled.div`
  margin: 0;
  padding-top: 120px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: url(${backgroundPattern});
  background-attachment: fixed;
`;

const AppTemplate = ({ children }) => (
  <StyledWrapper>
    <TopBar />
    {children}
  </StyledWrapper>
);

AppTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default AppTemplate;
