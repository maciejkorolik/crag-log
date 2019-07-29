import React from 'react';
import styled from 'styled-components';
import { ResponsivePie } from '@nivo/pie';
import Heading from 'components/atoms/Heading/Heading';
import chartTheme from 'theme/chartTheme';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 350px;
  padding: 20px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
  grid-column: 1 / 6;
`;
const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
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
    object.value = data.filter(climb => climb.type === object.id).length;
  });
  const filteredData = [...emptyData].filter(object => object.value > 0);
  return (
    <StyledWrapper>
      <Heading>Climbing types:</Heading>
      <ChartWrapper>
        <ResponsivePie
          data={filteredData}
          theme={chartTheme}
          colors={['#C37859', '#C69683', '#C1AAA1', '#E5D9D5', '#B5C9C5']}
          margin={{ top: 15, right: 80, bottom: 80, left: 80 }}
          fit={false}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          isInteractive={false}
          animate={false}
        />
      </ChartWrapper>
    </StyledWrapper>
  );
};

export default PieChart;
