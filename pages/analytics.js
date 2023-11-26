import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Equipments from '@/components/Equipments';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['lighting', 'Sockets', 'Cooking', 'Fire Alarm system'],
  datasets: [
    {
      label: '# of Votes',
      data: [420, 55, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function Analytics() {
  return (
    <Layout>
      <div class="flex justify-center items-center min-h-screen mx-auto mt-24 my-5">
        <div class="min-h-screen flex flex-col  justify-center items-start gap-4 top-0">
          {/* Pie Chart */}
          <div className="bg-white w-full  md:w-1/4 h-128 p-3 ">
            <p>Equipments and Appliances Distribution</p>
            <Pie data={data} />
          </div>
          <div>Equipments and Appliances</div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Equipments />
            {/* Sockets */}
            <div class="bg-white p-4 rounded-md shadow-md flex flex-col">
              <div class="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6 text-blue-500"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="8" cy="8" r="1" />
                  <circle cx="16" cy="8" r="1" />
                  <circle cx="12" cy="16" r="1" />
                </svg>
                <span> </span>
                <h2 class="text-xl font-semibold"> Sockets</h2>
              </div>
              <small class="mb-2">
                <strong>Total:</strong> 33 <strong>Working:</strong> 22
              </small>
            </div>
            {/* Cooking */}
            <div class="bg-white p-4 rounded-md shadow-md flex flex-col">
              <div class="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                  />
                </svg>

                <span> </span>
                <h2 class="text-xl font-semibold"> Cooking</h2>
              </div>{' '}
              <small class="mb-2">
                <strong>Appliances:</strong> gas stoves, charcoal grills,&
                boilers
              </small>
              <small class="mb-2">
                <strong>Energy source:</strong> Natural gas
              </small>
            </div>
            {/* Alarm System */}
            <div class="bg-white p-4 rounded-md shadow-md flex flex-col">
              <div class="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>

                <span> </span>
                <h2 class="text-xl font-semibold"> Fire Alarm System</h2>
              </div>
              <small class="mb-2">
                <strong>Call points:</strong> 2
              </small>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
