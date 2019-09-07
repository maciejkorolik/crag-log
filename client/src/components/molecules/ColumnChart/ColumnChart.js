import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Bar } from '@nivo/bar';
import AutoSizer from 'react-virtualized-auto-sizer';
import Heading from 'components/atoms/Heading/Heading';
import chartTheme from 'theme/chartTheme';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
  grid-area: d;

  @media (max-width: 560px) {
    min-height: 280px;
  }
`;

const ColumnChart = ({ data }) => {
  const emptyData = [
    { name: '4a', value: null },
    { name: '4b', value: null },
    { name: '4c', value: null },
    { name: '5a', value: null },
    { name: '5b', value: null },
    { name: '5c', value: null },
    { name: '6a', value: null },
    { name: '6a+', value: null },
    { name: '6b', value: null },
    { name: '6b+', value: null },
    { name: '6c', value: null },
    { name: '6c+', value: null },
    { name: '7a', value: null },
    { name: '7a+', value: null },
    { name: '7b', value: null },
    { name: '7b+', value: null },
    { name: '7c', value: null },
    { name: '7c+', value: null },
    { name: '8a', value: null },
    { name: '8a+', value: null },
    { name: '8b', value: null },
    { name: '8b+', value: null },
    { name: '8c', value: null },
    { name: '8c+', value: null },
    { name: '9a', value: null },
    { name: '9a+', value: null },
    { name: '9b', value: null },
    { name: '9b+', value: null },
    { name: '9c', value: null },
    { name: '9c+', value: null },
  ];
  emptyData.forEach(object => {
    // eslint-disable-next-line no-param-reassign
    object.value = data.filter(climb => climb.grade === object.name).length;
  });
  const filteredData = [...emptyData].filter(object => object.value > 0);

  return (
    <StyledWrapper>
      <Heading>Climbs divided by grades:</Heading>
      <AutoSizer>
        {({ height, width }) => (
          <Bar
            height={height}
            width={width}
            data={filteredData}
            indexBy="name"
            colors="#C37859"
            enableGridY={false}
            margin={{ top: 15, right: 0, bottom: 70, left: 0 }}
            padding={0.3}
            // @ts-ignore
            theme={chartTheme}
            axisLeft={null}
            isInteractive={false}
            animate={false}
          />
        )}
      </AutoSizer>
    </StyledWrapper>
  );
};

ColumnChart.propTypes = {
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

ColumnChart.defaultProps = {
  data: [],
};

export default ColumnChart;
