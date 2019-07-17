import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  text-decoration: none;
  padding: 0;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &.active {
    background-color: ${({ theme }) => theme.color2};
  }
`;

const StyledIcon = styled.div`
  display: block;
  width: 35px;
  height: 30px;
  margin-right: 15px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100% 100%;
  border: none;
`;

const StyledText = styled.div`
  color: ${({ theme }) => theme.darkgrey};
  font-family: 'Oswald', sans-serif;
  line-height: 1;
  font-size: 30px;
  font-weight: ${({ theme }) => theme.light};
`;

const NavButton = ({ to, icon, children }) => (
  <StyledButton to={to} activeClassName="active">
    <StyledIcon icon={icon} />
    <StyledText>{children}</StyledText>
  </StyledButton>
);

NavButton.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.string,
};

NavButton.defaultProps = {
  to: null,
  icon: null,
  children: null,
};

export default NavButton;
