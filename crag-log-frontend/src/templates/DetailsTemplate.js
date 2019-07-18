import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import AppTemplate from 'templates/AppTemplate';
import ClimbCard from 'components/molecules/ClimbCard/ClimbCard';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const climb = {
  id: 3,
  name: 'nazwa drogi',
  grade: '6b+',
  date: '25.07.19',
  location: 'Świebodzice',
  crag: 'Pełcznica',
  type: 'lead',
  style: 'OS',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
};

const DetailsTemplate = () => (
  <AppTemplate>
    <StyledWrapper>
      <ClimbCard details climb={climb} />
    </StyledWrapper>
  </AppTemplate>
);

export default DetailsTemplate;
