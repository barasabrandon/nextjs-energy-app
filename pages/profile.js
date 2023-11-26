import React from 'react';
import Layout from '../components/Layout';

export default function Profile() {
  return (
    <Layout>
      <>
        {' '}
        <div class="min-h-screen flex justify-center items-center bg-gray-200">
          <div class="bg-white p-8 rounded-md shadow-md">
            <h2 class="text-2xl font-semibold mb-4">User Profile</h2>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Name:
              </label>
              <p class="text-gray-800">Brandon Wanambisi</p>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Email Address:
              </label>
              <p class="text-gray-800">barasabrandon@gmail.com</p>
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Role:
              </label>
              <p class="text-gray-800">Administrator</p>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
