import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 320px;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  ${({ details }) =>
    details &&
    css`
      max-width: 1000px;
      min-height: 650px;
    `}
`;

const InnerWrapper = styled.div`
  background-color: transparent;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 20px;

  ${({ top}) =>
    top &&
    css`
      border-radius: 15px 15px 0 0;
      padding: 0 20px;
      height: 70px;
      background-color: ${({ theme }) => theme.color3};
      flex-direction: row;
      justify-content: ${({ details }) => details ? 'center' : 'flex-start'};
      align-items: center;
    `}

`;

const Grade = styled.div`
  position: absolute;
  top: -10px;
  right: ${({ details }) => details ? '30px' : '15px'};
  width: 90px;
  height: 90px;
  border-radius: 50px;
  background-color: ${({ gradeColor }) => gradeColor};
  color: ${({ theme }) => theme.color1};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.semibold};
`;

const StyledSpan = styled.span`
  font-weight: ${({ theme }) => theme.bold};
  padding-right: 8px;
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

class ClimbCard extends Component {
  state = {
    redirect: false,
    closeCard: false
  };

  handleCardClick = () => this.setState({ redirect: true });
  handleCardClose = () => this.setState({ closeCard: true })

  render() {
    const { climb, details } = this.props;
    const { id, name, grade, date, location, crag, type, style } = climb;
    let button;
    const gradeColor = () => {
      switch (grade) {
        case '4':
        case '4+':
        case '4a':
        case '4a+':
        case '4b':
        case '4b+':
        case '4c':
        case '4c+':
          return '#E5D9D5';
        case '5':
        case '5+':
        case '5a':
        case '5a+':
        case '5b':
        case '5b+':
          return '#C1AAA1';
        case '5c':
        case '5c+':
        case '6':
        case '6a':
        case '6a+':
        case '6b':
        case '6b+':
        case '6c':
        case '6c+':
        case '7':
        case '7+':
        case '7a':
        case '7a+':
          return '#C69683';
        case '7b':
        case '7b+':
        case '7c':
        case '7c+':
        case '8':
        case '8+':
        case '8a':
        case '8a+':
        case '8b':
        case '8b+':
        case '8c':
        case '8c+':
        case '9':
        case '9+':
        case '9a':
        case '9a+':
        case '9b':
        case '9b+':
        case '9c':
        case '9c+':
          return '#C37859';
        default:
          return 'white';
      }
    };

    const { redirect, closeCard } = this.state;

    if (redirect) {
      return <Redirect to={`/climbs/details/${id}`} />;
    }
    if (closeCard) {
      return <Redirect to='/climbs' />;
    }

    if (details) {
      button = (<StyledButton secondary onClick={this.handleCardClose} >
        Go back
          </StyledButton>);
    } else {
      button = (<StyledButton secondary onClick={this.handleCardClick}>
        See more
          </StyledButton>);
    }

    return (
      <StyledWrapper details={details} >
        <InnerWrapper top details={details} >
          <Heading light>{name}</Heading>
          <Grade gradeColor={gradeColor} details={details} >{grade}</Grade>
        </InnerWrapper>
        <InnerWrapper details={details} >
          <div>
            <Paragraph>
              <StyledSpan>Date:</StyledSpan>
              {date}
            </Paragraph>
            <Paragraph>
              <StyledSpan>Location:</StyledSpan>
              {location}
            </Paragraph>
            <Paragraph>
              <StyledSpan>Crag:</StyledSpan>
              {crag}
            </Paragraph>
            <Paragraph>
              <StyledSpan>Type:</StyledSpan>
              {type}
            </Paragraph>
            <Paragraph>
              <StyledSpan>Style:</StyledSpan>
              {style}
            </Paragraph>
          </div>
          {button}
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

ClimbCard.propTypes = {
  climb: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      grade: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      crag: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      style: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ClimbCard;


