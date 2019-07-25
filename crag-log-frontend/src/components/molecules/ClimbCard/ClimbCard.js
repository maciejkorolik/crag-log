import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import Grade from 'components/atoms/Grade/Grade';
import Rating from 'components/atoms/Rating/Rating';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 280px;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
`;

const InnerWrapper = styled.div`
  background-color: transparent;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  height: 100%;
  padding: 20px;

  ${({ top }) =>
    top &&
    css`
      border-radius: 15px 15px 0 0;
      padding: 0 20px;
      background-color: ${({ theme }) => theme.color3};
      flex-direction: row;
      justify-content: ${({ details }) => (details ? 'center' : 'flex-start')};
      align-items: center;
      height: 60px;
      max-height: 60px;
    `}
`;

const StyledSpan = styled.span`
  font-weight: ${({ theme }) => theme.bold};
  padding-right: 8px;
`;

const StyledButton = styled(Button)`
  margin-top: auto;
  align-self: flex-end;
`;

class ClimbCard extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { climb } = this.props;
    const { _id, name, grade, date, location, crag, type, rating } = climb;

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`/climbs/details/${_id}`} />;
    }

    return (
      <StyledWrapper>
        <InnerWrapper top>
          <Heading light>{name}</Heading>
          <Grade grade={grade}>{grade}</Grade>
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
            <Rating value={rating} />
          </div>
          <StyledButton secondary onClick={this.handleCardClick}>
            See more
          </StyledButton>
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
      rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ClimbCard;
