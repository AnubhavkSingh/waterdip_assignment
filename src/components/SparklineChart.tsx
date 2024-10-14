// src/components/SparklineChart.tsx

// import React from 'react';
// import Chart from 'react-apexcharts';
// import { DataRecord } from '../types/DataRecord';

// interface SparklineChartProps {
//   data: DataRecord[];
//   type: 'adults' | 'children';
// }

// const SparklineChart: React.FC<SparklineChartProps> = ({ data, type }) => {
//   const counts = data.map(record => record[type]);

//   const chartOptions = {
//     chart: {
//       id: `${type}-sparkline`,
//       type: 'line' as const,
//       sparkline: {
//         enabled: true,
//       },
//     },
//     colors: [type === 'adults' ? '#008FFB' : '#FEB019'], // Custom colors for the sparkline charts
//     tooltip: {
//       shared: true,
//       intersect: false,
//     },
//   };

//   const chartSeries = [
//     {
//       name: `${type.charAt(0).toUpperCase() + type.slice(1)} Visitors`,
//       data: counts,
//     },
//   ];

//   return (
//     <div>
//       <Chart options={chartOptions} series={chartSeries} type="line" height={100} />
//     </div>
//   );
// };

// export default SparklineChart;


import React from 'react';
import Chart from 'react-apexcharts';
import { DataRecord } from '../types/DataRecord';

interface SparklineChartProps {
  data: DataRecord[];
  type: 'adults' | 'children' | 'babies';
}

const SparklineChart: React.FC<SparklineChartProps> = ({ data, type }) => {
  let seriesData: number[] = [];
  let title: string = '';
  let color: string = '';

  switch (type) {
    case 'adults':
      seriesData = data.map(record => record.adults);
      title = 'Adults';
      color = '#008FFB';
      break;
    case 'children':
      seriesData = data.map(record => record.children);
      title = 'Children';
      color = '#FEB019';
      break;
    case 'babies':
      seriesData = data.map(record => record.babies);
      title = 'Babies';
      color = '#FF4560';
      break;
  }

  return (
    <div>
      <h3>{title}</h3>
      <Chart
        series={[{ name: title, data: seriesData }]}
        type="line"
        height={150}
        options={{
          chart: {
            id: `sparkline-${type}`,
            type: 'line',
            height: 150,
          },
          colors: [color],
          tooltip: {
            shared: true,
            intersect: false,
          },
        }}
      />
    </div>
  );
};

export default SparklineChart;





