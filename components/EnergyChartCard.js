'use client';
import React from 'react';
import EnergyChart from './EnergyChart'; // Make sure to import your EnergyChart component

const EnergyChartCard = ({ chartData }) => {
  return (
    <div className="bg-white shadow-md rounded px-2 mb-4 w-full md:w-96">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Energy Consumption Chart
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <EnergyChart data={chartData} />
      </div>
    </div>
  );
};

export default EnergyChartCard;
