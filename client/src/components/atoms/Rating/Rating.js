import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StarIcon from 'assets/icons/star.svg';
import StarIconActive from 'assets/icons/star-active.svg';

const StyledWrapper = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  margin: 10px 10px;
`;
const Star = styled.img`
  height: 20px;
`;

const Rating = ({ value }) => {
  const starArray = [StarIcon, StarIcon, StarIcon, StarIcon, StarIcon];
  for (let i = 0; i < value; i += 1) {
    starArray[i] = StarIconActive;
  }
  return (
    <StyledWrapper>
      {starArray.map(item => (
        <Star src={item} />
      ))}
    </StyledWrapper>
  );
};

Rating.propTypes = {
  value: PropTypes.number,
};

Rating.defaultProps = {
  value: 0,
};

export default Rating;
