import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import AppTemplate from 'templates/AppTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
// import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const DetailsPanel = styled.div`
  width: 100%;
  max-width: 650px;
  min-height: 450px;
  background-color: ${({ theme }) => theme.color2};
  border-radius: 30px;
  padding: 20px 30px;
`;
const StyledSpan = styled.span`
  font-weight: ${({ theme }) => theme.medium};
  padding-right: 8px;
`;

const DetailsTemplate = () => (
  <AppTemplate>
    <StyledWrapper>
      <DetailsPanel>
        <Heading big>Details</Heading>
        <div>
          <Paragraph bigger>
            <StyledSpan>Date:</StyledSpan>
            asdf
          </Paragraph>
          <Paragraph bigger>
            <StyledSpan>Location:</StyledSpan>
            asdfasdf
          </Paragraph>
          <Paragraph bigger>
            <StyledSpan>Crag:</StyledSpan>
            asdfasdfas
          </Paragraph>
          <Paragraph bigger>
            <StyledSpan>Type:</StyledSpan>
            asdfasdfasd
          </Paragraph>
          <Paragraph bigger>
            <StyledSpan>Style:</StyledSpan>
            asdfasdfasd
          </Paragraph>
        </div>
      </DetailsPanel>
    </StyledWrapper>
  </AppTemplate>
);

export default DetailsTemplate;
