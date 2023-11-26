// EnergyChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const EnergyChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Energy Consumption',
        data: data.values,
        backgroundColor: '#3490dc',
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default EnergyChart;
