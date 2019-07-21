import React from 'react';

import styled from 'styled-components';
import routesIcon from 'assets/icons/routes.svg';
import activeRoutesIcon from 'assets/icons/activeroutes.svg';
import statsIcon from 'assets/icons/stats.svg';
import activeStatsIcon from 'assets/icons/activestats.svg';
import logoIcon from 'assets/icons/logo.svg';
import logoutIcon from 'assets/icons/logout.svg';
import NavButton from 'components/atoms/NavButton/NavButton';
import IconButton from 'components/atoms/IconButton/IconButton';

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.color1};
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  z-index: 1000;
`;

const StyledLogo = styled.div`
  display: block;
  width: 190px;
  height: 36px;
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
        <NavButton
          to="/climbs"
          icon={routesIcon}
          activeIcon={activeRoutesIcon}
          activeClassName="active"
        >
          Routes
        </NavButton>
      </li>
      <li>
        <NavButton
          to="/stats"
          icon={statsIcon}
          activeIcon={activeStatsIcon}
          activeClassName="active"
        >
          Stats
        </NavButton>
      </li>
    </StyledNavList>
    <IconButton icon={logoutIcon} />
  </StyledWrapper>
);

export default TopBar;
