import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ active }) => (active ? ({ theme }) => theme.color2 : 'transparent')};
  text-decoration: none;
  padding: 0;
  width: 220px;
  height: 70px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const StyledIcon = styled.div`
  display: block;
  width: 50px;
  height: 40px;
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
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.light};
`;

const NavButton = ({ className, icon, children }) => (
  <StyledWrapper active={className}>
    <StyledIcon icon={icon} />
    <StyledText>{children}</StyledText>
  </StyledWrapper>
);

NavButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.string,
};

NavButton.defaultProps = {
  className: null,
  icon: null,
  children: null,
};

export default NavButton;
