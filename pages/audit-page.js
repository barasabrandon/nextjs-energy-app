import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Recommendations() {
  const recommendationsData = [
    {
      title: 'Soweto',
      recommendations: [
        'Replacing the old light fittings and sockets with new ones and proper fencing around the substation.',
      ],
    },
  ];

  return (
    <Layout>
      <div class="flex justify-center items-center min-h-screen mx-auto mt-24 my-5">
        <div class="min-h-screen flex justify-center items-center">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white p-4 rounded-md shadow-md flex flex-col">
              <div class="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-2 text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
                <h2 class="text-xl font-semibold">Soweto</h2>
              </div>
              <small class="mb-2">
                <strong>Start date:</strong> 12/09/2023{' '}
                <strong>End date:</strong> 12/09/2023
              </small>
              <Link href="#" class="text-blue-500">
                Audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
