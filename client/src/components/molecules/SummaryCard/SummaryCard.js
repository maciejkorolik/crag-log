import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import Heading from 'components/atoms/Heading/Heading';
import climberIcon from 'assets/icons/climber-black.svg';

const StyledWrapper = styled.div`
  height: auto;
  min-height: 280px;
  padding: 20px;
  padding-bottom: 50px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
  grid-area: a;
`;
const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
const ClimbIcon = styled.img`
  height: 80px;
  object-fit: contain;
`;

const ClimbNumber = styled.h3`
  font-size: 100px;
  font-family: poppins, sans-serif;
  font-weight: ${({ theme }) => theme.bold};
  line-height: 1;
  margin: 0;
  margin-left: 30px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
  margin-top: auto;
  margin-bottom: auto;
`;
const StyledSpan = styled.span`
  font-weight: ${({ theme }) => theme.bold};
  padding-left: 15px;
`;

const SummaryCard = ({ data }) => {
  const climbsCount = data.length;
  const monthCount = data.filter(
    climb => moment(climb.date).format('MM YYYY') === moment().format('MM YYYY'),
  ).length;
  return (
    <StyledWrapper>
      <Heading>Total climbs:</Heading>
      <InnerWrapper>
        <ClimbIcon src={climberIcon} />
        <ClimbNumber>{climbsCount}</ClimbNumber>
      </InnerWrapper>
      <Line />
      <Heading slim>Current month: <StyledSpan>{monthCount}</StyledSpan></Heading>
    </StyledWrapper>
  );
};

SummaryCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      grade: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      crag: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};

SummaryCard.defaultProps = {
  data: [],
};

export default SummaryCard;
