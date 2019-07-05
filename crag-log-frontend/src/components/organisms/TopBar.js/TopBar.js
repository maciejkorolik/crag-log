import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import routesIcon from 'assets/icons/routes.svg';
import statsIcon from 'assets/icons/stats.svg';
import logoIcon from 'assets/icons/logo.svg';
import NavButton from 'components/atoms/NavButton/NavButton';

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.color1};
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
`;

const StyledLogo = styled.div`
  display: block;
  width: 171px;
  height: 50px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  border: none;
`;

const StyledNavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const TopBar = () => (
  <StyledWrapper>
    <StyledLogo />
    <StyledNavList>
      <li>
        <NavButton as={NavLink} to="/climbs" icon={routesIcon} activeclass="active">
          Routes
        </NavButton>
      </li>
      <li>
        <NavButton as={NavLink} to="/stats" icon={statsIcon} activeclass="active">
          Stats
        </NavButton>
      </li>
    </StyledNavList>
    {/* <StyledLogoutButton /> */}
  </StyledWrapper>
);

export default TopBar;
