// import React, { useState } from 'react';
// import axios from 'axios';

// const ProfileInfo = () => {
//     const [profileData, setProfileData] = useState({
//         name: 'Bhau',
//         age: 25,
//         gender: 'male',
//         address: '123 Main St, Cityville',
//         state: 'Andhra Pradesh',
//         country: 'India',
//         pincode: '123456'
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProfileData({
//             ...profileData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         // Get the token from local storage or wherever it's stored
//         const token = localStorage.getItem('token'); // Adjust this line based on how you store the token
//         console.log('data sent: ',profileData)
//         try {
//             const response = await axios.post('http://localhost:3000/profile/userInfo', profileData, {
//                 headers: {
//                     Authorization: `Bearer ${token}`, // Include the token in the headers
//                 },
//             });
//             alert(response.data.message); // Show success message
//         } catch (error) {
//             console.error('Error saving profile:', error);
//             alert('Error saving profile: ' + error.response.data.message); // Show error message
//         }
//     };


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileInfo = () => {
    const [profileData, setProfileData] = useState({
        username: '',
        age: '',
        gender: '',
        address: '',
        state: '',
        country: 'India',
        pincode: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch the profile info when the component mounts
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming the token is stored in local storage

                const response = await axios.get('http://localhost:3000/profile/userInfo', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json', // Include the token in the headers
                    },
                });

                // setProfileData(response.data); // Set the fetched profile data
                setProfileData(() => ({
                    // ...prevData,
                    ...response.data, // Merges the existing data with the fetched data
                }));
                setLoading(false);
            } catch (err) {
                console.error('Error fetching profile data:', err);
                setError(err.response ? err.response.data.message : 'Error fetching profile data');
                setLoading(false);
            }
        };

        fetchProfileData();
    }, []); // Empty dependency array ensures it runs only once

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get the token from local storage
        const token = localStorage.getItem('token'); 
        console.log('data sent: ', profileData);

        try {
            const response = await axios.post('http://localhost:3000/profile/userInfo', profileData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                 
                },
            });
            alert(response.data.message); // Show success message
        } catch (error) {
            console.error('Error saving profile:', error);
            alert('Error saving profile: ' + error.response.data.message); 
        }
    };

    if (loading) {
        return <div>Loading profile...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
            <form id="profileForm" className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="username" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4" value={profileData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                    <input type="number" id="age" name="age" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4" value={profileData.age} onChange={handleChange} />
                </div>
                {/* <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4" value={profileData.email} onChange={handleChange} />
                </div> */}
                <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                    <select id="gender" name="gender" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4" value={profileData.gender} onChange={handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <input type="text" id="address" name="address" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4" value={profileData.address} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                    <select id="state" name="state" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4" value={profileData.state} onChange={handleChange}>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                    <input type="text" id="country" name="country" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4" value={profileData.country} readOnly />
                </div>
                <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pin Code</label>
                    <input type="text" id="pincode" name="pincode" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-3 px-4" value={profileData.pincode} onChange={handleChange} />
                </div>
                <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                </button>
            </form>
        </div>
    );
};

export default ProfileInfo;
