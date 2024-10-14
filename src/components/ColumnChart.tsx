// src/components/ColumnChart.tsx

import React from 'react';
import Chart from 'react-apexcharts';
import { DataRecord } from '../types/DataRecord';

interface ColumnChartProps {
  data: DataRecord[];
}

const ColumnChart: React.FC<ColumnChartProps> = ({ data }) => {
  const countryCounts = data.reduce((acc: { [key: string]: number }, record) => {
    acc[record.country] = (acc[record.country] || 0) + 1;
    return acc;
  }, {});

  const countries = Object.keys(countryCounts);
  const counts = Object.values(countryCounts);

  const chartOptions = {
    chart: {
      id: 'visitors-by-country',
      type: 'bar' as const,
      height: 350,
    },
    colors: ['#00E396'], // Custom color for the bar chart
    xaxis: {
      categories: countries,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  const chartSeries = [
    {
      name: 'Visitors',
      data: counts,
    },
  ];

  return (
    <div>
      <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
    </div>
  );
};

export default ColumnChart;


