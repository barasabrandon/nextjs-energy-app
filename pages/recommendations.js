import React from 'react';
import Layout from '../components/Layout';

export default function Recommendations() {
  const recommendationsData = [
    {
      title: 'Energy Efficiency Tips',
      recommendations: [
        'Replacing the old light fittings and sockets with new ones and proper fencing around the substation.',
      ],
    },
    {
      title: 'LED Retrofit',
      recommendations: [
        'Consider replacing the existing fluorescent tubes with energy-efficient LED (Light Emitting Diode) lighting. LED are also known for their higher energy efficiency and longer lifespan, which can reduce the energy consumption and maintenance costs. ',
      ],
    },
    {
      title: 'Motion and Occupancy Sensors',
      recommendations: [
        'Install sensors in rooms with intermittent usage, such as storage rooms, and the cool room. These sensors can automatically switch on and off the lights, further reducing energy waste.',
      ],
    },
    {
      title: 'Regular Maintenance: ',
      recommendations: [
        'Develop a routine schedule to replace aging bulbs and fixtures immediately. Ensure the maintenance personnel can easily access lighting fixtures for replacements and repairs. Also implement a maintenance schedule for the HVAC system including filter replacement, cleaning of ducts, and inspection of components. ',
      ],
    },
    {
      title: 'Appliance Upgrades',
      recommendations: [
        'Consider upgrading older, energy-inefficient appliances to newer, Energy Star-rated models. Energy-efficient appliances consume less electricity while maintaining optimal performance. ',
      ],
    },
    {
      title: 'Socket Optimization',
      recommendations: [
        'Review the placement and necessity of electrical sockets in the kitchen to eliminate redundant outlets and reduce standby power consumption. ',
      ],
    },
    // Add more cards with different titles and recommendations
  ];

  return (
    <Layout>
      <div class="flex justify-center items-center min-h-screen mx-auto mt-24 my-5">
        <div class="min-h-screen flex justify-center items-center">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recommendationsData.map((item, index) => (
              <div key={index} class="bg-white p-4 rounded-md shadow-md">
                <h2 class="text-xl font-semibold mb-2">{item.title}</h2>
                <p>{item.recommendations}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
