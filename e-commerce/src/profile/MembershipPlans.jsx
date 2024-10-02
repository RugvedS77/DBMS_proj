import React from 'react';

const MembershipPlans = () => {
  return (
    <aside className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Membership Plans</h2>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg">
          <ul className="text-left mt-4 list-disc list-inside text-gray-600">
            <li>Get up to 70% OFF on each product you buy</li>
            <li>Free shipping on all orders</li>
            <li>Get same day delivery</li>
            <li>Early access to shopping events</li>
            <li>Earn unlimited 5% cashback</li>
            <li>Unlimited free delivery</li>
          </ul>
          <a href="Membership.html" className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded mt-6 inline-block">Get Membership</a>
        </div>
      </div>
    </aside>
  );
};

export default MembershipPlans;
