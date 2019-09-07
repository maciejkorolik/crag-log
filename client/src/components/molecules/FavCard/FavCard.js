import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Rating from 'components/atoms/Rating/Rating';

const StyledWrapper = styled.div`
  height: auto;
  min-height: 280px;
  padding: 20px;
  padding-bottom: 50px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
  grid-area: c;
`;
const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
  margin: auto;
`;

const StyledSpan = styled.span`
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledRating = styled(Rating)`
  @media (max-width: 560px) {
    visibility: hidden;
  }
`;

const FavCard = ({ data }) => {
  const sortedData = data.sort((a, b) => b.rating - a.rating).slice(0, 5);
  return (
    <StyledWrapper>
      <Heading>Your favourite climbs:</Heading>
      <Line />
      {sortedData.map(climb => (
        <ItemWrapper>
          <Paragraph>
            <StyledSpan>• {climb.name},</StyledSpan> {climb.grade}
          </Paragraph>
          <StyledRating value={climb.rating} />
        </ItemWrapper>
      ))}
    </StyledWrapper>
  );
};

FavCard.propTypes = {
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

FavCard.defaultProps = {
  data: [],
};

export default FavCard;
