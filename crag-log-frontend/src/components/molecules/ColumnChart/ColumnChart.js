import React from 'react';
import styled from 'styled-components';
import { ResponsiveBar } from '@nivo/bar';
import Heading from 'components/atoms/Heading/Heading';
import chartTheme from 'theme/chartTheme';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 20px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
  grid-column: 4 / -1;
`;
const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 300px;
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
    object.value = data.filter(climb => climb.grade === object.name).length;
  });
  const filteredData = [...emptyData].filter(object => object.value > 0);

  return (
    <StyledWrapper>
      <Heading>Climbs divided by grades:</Heading>
      <ChartWrapper>
        <ResponsiveBar
          data={filteredData}
          indexBy="name"
          colors="#C37859"
          enableGridY={false}
          margin={{ top: 15, right: 15, bottom: 50, left: 15 }}
          padding={0.3}
          theme={chartTheme}
          axisLeft={null}
          isInteractive={false}
          animate={false}
        />
      </ChartWrapper>
    </StyledWrapper>
  );
};

export default ColumnChart;
// const ChartWrapper = styled.div`
//   margin: 20px;
//   height: 200px;
//   background-color: lightgray;
//   display: flex;
//   align-items: flex-end;
// `;
// const Bar = styled.div`
//   background-color: coral;
//   width: 30px;
//   margin: 0 10px;
//   height: ${({ height }) => height}%;
// `;

// const ColumnChart = ({ data }) => {
//   const maxValue = Math.max(...data.map(obj => obj.value));
//   return (
//     <StyledWrapper>
//       <ChartWrapper>
//         {data.map(item => (
//           <Bar height={(item.value / maxValue) * 100} />
//         ))}
//       </ChartWrapper>
//     </StyledWrapper>
//   );
// };

// export default ColumnChart;
