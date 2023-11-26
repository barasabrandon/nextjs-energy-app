'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function AuditForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  function handleSubmit() {}

  function handleInputChange() {}

  return (
    <Layout>
      <div className="bg-gray-200 min-h-screen flex justify-center items-center ">
        <div className="w-full max-w-xs mx-auto">
          <div className="bg-white shadow-md rounded px-8 mt-24 pb-8 mb-4">
            <div className="flex flex-row justify-between items-center">
              <div>
                {' '}
                <h5 className="text-2xl font-semibold mb-4">NEW ENTITY FORM</h5>
              </div>
              <div>
                <Link className="text-blue-500" href="/audit-page">
                  All
                </Link>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Date of Audit:
                </label>
                <input
                  type="date"
                  id="username"
                  name="password"
                  value={formData.password}
                  placeholder="Date of Audit"
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  End Date of Audit:
                </label>
                <input
                  type="date"
                  id="username"
                  name="password"
                  value={formData.password}
                  placeholder="Next Date of Audit"
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name of the Entity:
                </label>
                <input
                  type="text"
                  id="username"
                  name="password"
                  value={formData.password}
                  placeholder="Name of the Entity"
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Associated Facilities:
                </label>
                <input
                  type="text"
                  id="username"
                  name="password"
                  value={formData.password}
                  placeholder="Comma separated eg H, J, G"
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
