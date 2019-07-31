import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import AppTemplate from 'templates/AppTemplate';
import DetailsPanel from 'components/molecules/DetailsPanel/DetailsPanel';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const DetailsTemplate = ({ climb }) => (
  <AppTemplate>
    <Fade>
      <StyledWrapper>
        <DetailsPanel climb={climb} />
      </StyledWrapper>
    </Fade>
  </AppTemplate>
);

DetailsTemplate.propTypes = {
  climb: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      grade: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      crag: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DetailsTemplate;
