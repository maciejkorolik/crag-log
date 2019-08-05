import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Bar } from '@nivo/bar';
import chartTheme from 'theme/chartTheme';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
  grid-area: e;
`;

const CragsCard = ({ data }) => {
  const crags = [];

  data.forEach(climb => {
    if (!crags.includes(climb.crag)) {
      crags.push(climb.crag);
    }
  });

  const sortedData = crags
    .map(crag => {
      return {
        name: crag,
        value: data.filter(climb => climb.crag === crag).length,
      };
    })
    .sort((a, b) => a.value - b.value)
    .slice(0, 5);

  return (
    <StyledWrapper>
      <Heading>Most popular crags:</Heading>
      <AutoSizer>
        {({ height, width }) => (
          <Bar
            height={height}
            width={width}
            data={sortedData}
            indexBy="name"
            colors="#C37859"
            layout="horizontal"
            enableGridY={false}
            margin={{ top: 15, right: 15, bottom: 15, left: 120 }}
            padding={0.3}
            labelSkipWidth={15}
            // @ts-ignore
            theme={chartTheme}
            axisBottom={null}
            isInteractive={false}
            animate={false}
          />
        )}
      </AutoSizer>
    </StyledWrapper>
  );
};

CragsCard.propTypes = {
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

CragsCard.defaultProps = {
  data: [],
};

export default CragsCard;
