import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';
import backgroundPattern from 'assets/topography.svg';
import TopBar from 'components/organisms/TopBar/TopBar';
import SmallScreenWarning from 'components/atoms/SmallScreenWarning/SmallScreenWarning';

const StyledWrapper = styled.div`
  margin: 0;
  padding-top: 70px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: url(${backgroundPattern});
  background-attachment: fixed;
  position: relative;
`;

const AppTemplate = ({ children, userID }) => {
  if (!userID) {
    return <Redirect to={routes.login} />;
  }
  const width = window.innerWidth;

  return (
    <StyledWrapper>
      {width > 760 ? (
        <>
          <TopBar />
          {children}
        </>
      ) : (
        <SmallScreenWarning />
      )}
    </StyledWrapper>
  );
};

AppTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  userID: PropTypes.string,
};

AppTemplate.defaultProps = {
  userID: '',
};

const mapStateToProps = state => {
  const { userID } = state;
  return { userID };
};

export default connect(mapStateToProps)(AppTemplate);
