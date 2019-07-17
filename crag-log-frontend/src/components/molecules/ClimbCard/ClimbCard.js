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
  padding-bottom: 20px;

  ${({ top }) =>
    top &&
    css`
      padding-bottom: 0;
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
  background-color: ${({ color }) => color};
  display: flex;
  border: 5px solid ${({ theme }) => theme.color1};
  justify-content: center;
  align-items: center;
  font-family: 'Oswald', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledSpan = styled.span`
  font-weight: ${({ theme }) => theme.bold};
  padding-right: 8px;
`;

const StyledButton = styled(Button)`
  align-self: center;
`;

class ClimbCard extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { climb } = this.props;
    const { id, name, grade, date, location, crag, type, style } = climb;
    const color = () => {
      switch (grade) {
        case '4':
        case '4+':
        case '4a':
        case '4a+':
        case '4b':
        case '4b+':
        case '4c':
        case '4c+':
        case '5':
        case '5+':
        case '5a':
        case '5a+':
        case '5b':
        case '5b+':
          return 'green';
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
          return 'yellow';
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
          return 'red';
        default:
          return 'grey';
      }
    };

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`climbs/details/${id}`} />;
    }

    return (
      <StyledWrapper>
        <InnerWrapper top>
          <Heading>{name}</Heading>
          <Grade color={color}>{grade}</Grade>
        </InnerWrapper>
        <InnerWrapper>
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
          <StyledButton secondary onClick={this.handleCardClick}>see more</StyledButton>
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

//    name: null,
//   grade: null,
//   date: null,
//   location: null,
//   crag: null,
//   type: null,
//   style: null
