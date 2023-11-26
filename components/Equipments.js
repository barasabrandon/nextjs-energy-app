import Link from 'next/link';
import React from 'react';

export default function Equipments() {
  return (
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
            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>

        <h2 class="text-xl font-semibold"> Lighting</h2>
      </div>
      <small class="mb-2">
        <strong>Total:</strong> 337 <strong>Working:</strong> 83
      </small>
      <small class="mb-2">
        <strong>Security:</strong> [40Watts] <strong>Inhouse:</strong> [20Watts]
      </small>
    </div>
  );
}
