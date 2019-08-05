import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Pie } from '@nivo/pie';
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
  grid-area: b;
`;

const PieChart = ({ data }) => {
  const emptyData = [
    { id: 'Lead', value: 0 },
    { id: 'Top rope', value: 0 },
    { id: 'Multi-pitch', value: 0 },
    { id: 'Boulder', value: 0 },
    { id: 'Free solo', value: 0 },
  ];
  emptyData.forEach(object => {
    // eslint-disable-next-line no-param-reassign
    object.value = data.filter(climb => climb.type === object.id).length;
  });
  const filteredData = [...emptyData].filter(object => object.value > 0);
  return (
    <StyledWrapper>
      <Heading>Climbing types:</Heading>
      <AutoSizer>
        {({ height, width }) => (
          <Pie
            height={height}
            width={width}
            data={filteredData}
            // @ts-ignore
            theme={chartTheme}
            colors={['#C37859', '#C69683', '#C1AAA1', '#E5D9D5', '#B5C9C5']}
            margin={{ top: 50, right: 80, bottom: 50, left: 80 }}
            fit={false}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            isInteractive={false}
            animate={false}
          />
        )}
      </AutoSizer>
    </StyledWrapper>
  );
};

PieChart.propTypes = {
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

PieChart.defaultProps = {
  data: [],
};

export default PieChart;
