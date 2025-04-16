import React from 'react';

export default function Integration() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Integrations</h2>

      <div className="bg-white p-6 rounded-lg shadow border border-gray-200 space-y-6">
        <section>
          <h3 className="text-xl font-medium mb-2">Payment Gateways</h3>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Razorpay</li>
            <li>Stripe</li>
            <li>PayPal</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-medium mb-2">Channel Managers</h3>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>OTA Integration (e.g. Booking.com, Expedia)</li>
            <li>POS Systems</li>
            <li>PMS (Property Management Systems)</li>
          </ul>
        </section>

        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Manage Integrations
        </button>
      </div>
    </div>
  );
}
