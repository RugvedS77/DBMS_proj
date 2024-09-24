import React, { useState } from 'react';

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState('profileInfo');

  const saveProfile = () => {
    // Handle profile data saving here
    console.log('Profile saved!');
  };

  const registerSeller = () => {
    // Handle seller registration here
    console.log('Seller registered!');
  };

  const contentMap = {
    profileInfo: (
      <div>
        <h2>Profile Information</h2>
        <form>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4"
                value="Bhau"
              />
            </div>
            <div className="flex flex-row space-x-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4"
                value="Kadam"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4"
                value="example@example.com"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4"
                value="25"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4"
              >
                <option value="male" selected>
                  Male
                </option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4"
                value="123 Main St, Cityville"
              />
            </div>
            <div className="flex flex-row space-x-2">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State
              </label>
              <select
                id="state"
                name="state"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4"
              >
                <option value="" selected>
                  Select State
                </option>
                {/* States of India */}
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                {/* ... other states */}
              </select>
            </div>
            <div className="flex flex-row space-x-2">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4"
                value="India"
                readOnly
              />
            </div>
            <div className="flex flex-row space-x-2">
              <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                Pin Code
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4"
                value="123456"
              />
            </div>
            <button
              type="button"
              onClick={saveProfile}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    ),
    orders: (
      <div>
        <h2>Your Orders</h2>
        {/* ... order list */}
      </div>
    ),
    seller: (
      <div>
        <h2>Seller Registration</h2>
        <form>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-2">
              <label htmlFor="sellerName" className="block text-sm font-medium text-gray-700">
                Seller Name
              </label>
              <input
                type="text"
                id="sellerName"
                name="sellerName"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4"
              />
            </div>
            <div className="flex flex-row space-x-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4"
              />
            </div>
            <div className="flex flex-row space-x-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4"
              />
            </div>
            <div className="flex flex-row space-x-2">
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"   

                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4"
              />
            </div>
            <div className="flex flex-row space-x-2">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Product Category
              </label>
              <select
                id="category"
                name="category"   

                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4"
              >
                <option value="">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home & Furniture</option>
                <option value="books">Books</option>
                <option value="others">Others</option>
              </select>
            </div>
            <button
              type="button"
              onClick={registerSeller}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              Register as Seller
            </button>
          </div>
        </form>
      </div>
    ),
    contacts: (
      <div>
        <h2>Contacts</h2>
        <p>Phone: +123 456 7890</p>
        <p>Email: support@MORS.com</p>
      </div>
    ),
    security: (
      <div>
        <h2>Security</h2>
        {/* ... security settings */}
      </div>
    ),
  };

  const showContent = (section) => {
    setActiveSection(section);
  };

  

  

  return (
    <div className="container mx-auto px-6 py-16 mt-16">
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10">
        <aside className="w-full lg:w-1/4">
          <div className="text-center">
            <img src="2.avif" alt="User Avatar" className="rounded-full w-32 mx-auto mb-4" />
            <h2 className="text-xl font-semibold">Bhau Kadam</h2>
            <p className="text-black">BhauKadam@gmail.com</p>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-6">
            <button
              className={`bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded ${activeSection === 'profileInfo' ? 'bg-blue-500' : ''}`}
              onClick={() => showContent('profileInfo')}
            >
              Profile Info
            </button>
            <button
              className={`bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded ${activeSection === 'orders' ? 'bg-blue-500' : ''}`}
              onClick={() => showContent('orders')}
            >
              Orders
            </button>
            <button
              className={`bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded ${activeSection === 'seller' ? 'bg-blue-500' : ''}`}
              onClick={() => showContent('seller')}
            >
              Seller
            </button>
            <button
              className={`bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded ${activeSection === 'contacts' ? 'bg-blue-500' : ''}`}
              onClick={() => showContent('contacts')}
            >
              Contacts
            </button>
            <button
              className={`bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded ${activeSection === 'security' ? 'bg-blue-500' : ''}`}
              onClick={() => showContent('security')}
            >
              Security
            </button>
          </div>
        </aside>

        <section id="content" className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow flex-grow">
          {contentMap[activeSection]}
        </section>

        <aside className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Membership Plans</h2>
          {/* ... membership plans */}
        </aside>
      </div>
    </div>
  );
};

export default UserProfile;