// src/components/TimeSeriesChart.tsx

import React from 'react';
import Chart from 'react-apexcharts';
import { DataRecord } from '../types/DataRecord';

interface TimeSeriesChartProps {
  data: DataRecord[];
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ data }) => {
  const dates = data.map(record => `${record.arrival_date_year}-${record.arrival_date_month}-${record.arrival_date_day_of_month}`);
  const visitors = data.map(record => record.adults + record.children + record.babies);

  const chartOptions = {
    chart: {
      id: 'visitors-time-series',
      type: 'line' as const,
      height: 350,
    },
    colors: ['#FF4560'], // Custom color for the line chart
    xaxis: {
      categories: dates,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  const chartSeries = [
    {
      name: 'Visitors',
      data: visitors,
    },
  ];

  return (
    <div>
      <Chart options={chartOptions} series={chartSeries} type="line" height={350} />
    </div>
  );
};

export default TimeSeriesChart;






