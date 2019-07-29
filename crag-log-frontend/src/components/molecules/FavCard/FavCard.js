import React from 'react';
import styled from 'styled-components';
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
  justify-content: space-between;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
  grid-column: 6 / -1;
`;
const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 30px;
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
  padding-right: 15px;
`;

const FavCard = ({ data }) => {
const sortedData = data.sort((a,b) => b.rating-a.rating).slice(0,5)
  return (
    <StyledWrapper>
      <Heading>Your favourite climbs:</Heading>
      <InnerWrapper>
{sortedData.map(climb => (
  <>
  <Paragraph><StyledSpan>{climb.name},</StyledSpan> {climb.crag}, {climb.location}</Paragraph>
  <Rating value={climb.rating}/>
  </>
))}
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default FavCard;
