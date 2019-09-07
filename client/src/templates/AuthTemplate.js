import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import logoImg from 'assets/icons/logo.svg';
import backgroundPattern from 'assets/topography.svg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundPattern});
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled.img`
  width: 350px;
  height: auto;
  margin-bottom: 50px;
  @media (max-width: 560px) {
    width: 200px;
    margin-bottom: 30px;
  }
`;

const StyledAuthCard = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 560px) {
    width: 290px;
    height: 350px;
  }
`;

const AuthTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledLogo src={logoImg} alt="" />
    <Fade>
      <StyledAuthCard>{children}</StyledAuthCard>
    </Fade>
  </StyledWrapper>
);

AuthTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default AuthTemplate;
