import React, { useState } from 'react';
import ProfileInfo from '../profile/ProfileInfo';
import MembershipPlans from '../profile/MembershipPlans';
import Seller from '../profile/Seller';
import Orders from '../profile/Orders';
import Contact from '../profile/Contact';

const ProfilePage = () => {
    const [activeSection, setActiveSection] = useState('profileInfo');

    const showContent = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="container mx-auto px-6 py-16 mt-16 ">
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10">
                {/* Sidebar with buttons */}
                <aside className="w-full lg:w-1/4">
                    <div className="text-center">
                        <img src="2.avif" alt="User Avatar" className="rounded-full w-32 mx-auto mb-4" />
                        <h2 className="text-xl font-semibold">Bhau Kadam</h2>
                        <p className="text-black">BhauKadam@gmail.com</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-6">
                        <button onClick={() => showContent('profileInfo')} className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded">Profile Info</button>
                        <button onClick={() => showContent('orders')} className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded">Orders</button>
                        <button onClick={() => showContent('seller')} className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded">Seller</button>
                        <button onClick={() => showContent('contacts')} className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded">Contacts</button>
                        <button onClick={() => showContent('security')} className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded">Security</button>
                    </div>
                </aside>

                {/* Middle section to load content */}
                <section className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow flex-grow">
                    {activeSection === 'profileInfo' && <ProfileInfo />}
                    {activeSection === 'orders' && <Orders />}
                    {activeSection === 'seller' && <Seller />}
                    {activeSection === 'contacts' && <Contact />}
                </section>

                {/* Right section for Membership Plans */}
                <MembershipPlans />
            </div>
        </div>
    );
};

export default ProfilePage;
