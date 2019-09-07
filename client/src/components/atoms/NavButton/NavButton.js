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
  height: 38px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &.active {
    background-color: ${({ theme }) => theme.color2};
  }
  @media (max-width: 760px) {
    width: 100px;
    height: 32px;
  }
`;

const StyledIcon = styled.div`
  display: block;
  width: 25px;
  height: 24px;
  margin-right: 7px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100% 100%;
  border: none;
  ${StyledButton}.active & {
    background-image: url(${({ activeIcon }) => activeIcon});
  }
  @media (max-width: 760px) {
    width: 20px;
    height: 19px;
    margin-right: 4px;
  }
`;

const StyledText = styled.div`
  color: ${({ theme }) => theme.white};
  font-family: 'Open Sans', sans-serif;
  line-height: 1;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.semibold};
  ${StyledButton}.active & {
    color: ${({ theme }) => theme.color1};
  }
  @media (max-width: 760px) {
    font-size: 17px;
  }
`;

const NavButton = ({ to, icon, activeIcon, children }) => (
  <StyledButton to={to} activeClassName="active">
    <StyledIcon icon={icon} activeIcon={activeIcon} />
    <StyledText>{children}</StyledText>
  </StyledButton>
);

NavButton.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.string,
  activeIcon: PropTypes.string,
  children: PropTypes.string,
};

NavButton.defaultProps = {
  to: null,
  icon: null,
  activeIcon: null,
  children: null,
};

export default NavButton;
