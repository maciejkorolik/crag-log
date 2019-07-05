import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  width: 300px;
  min-height: 320px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 15px;
  position: relative;
  display: grid;
  background-color: ${({ theme }) => theme.color2};
`;

const InnerWrapper = styled.div`
  background-color: transparent;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;

  ${({ top }) =>
    top &&
    css`
      height: 70px;
      background-color: ${({ theme }) => theme.color1};
    `}
`;

const Grade = styled.div`
  position: absolute;
  top: -10px;
  right: 15px;
  width: 90px;
  height: 90px;
  border-radius: 50px;
  background-color: yellow;
  display: flex;
  border: 5px solid ${({ theme }) => theme.color1};
  justify-content: center;
  align-items: center;
  font-family: 'Oswald', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};
`;

const ClimbCard = () => (
  <StyledWrapper>
    <InnerWrapper top>
      <Heading>Nazwa drogi</Heading>
      <Grade>5a+</Grade>
    </InnerWrapper>
    <InnerWrapper>
      <Paragraph>asdfasdf</Paragraph>
    </InnerWrapper>
  </StyledWrapper>
);

export default ClimbCard;
