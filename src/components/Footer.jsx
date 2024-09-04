import React, { useState } from 'react';
import Notification from './Notification';

const Footer = () => {
    const [showNotification, setShowNotification] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
    };

    return (
        <>
            <footer className="bg-gray-800 text-white py-10">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between lg:space-x-12">
                    {/* Links Section */}
                    <div className="mb-8 lg:mb-0 lg:w-1/3 lg:pr-8">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="/about" className="hover:underline">About Us</a></li>
                            <li><a href="/courses" className="hover:underline">Courses</a></li>
                            <li><a href="/contact" className="hover:underline">Student Login</a></li>
                        </ul>
                    </div>

                    {/* Contact Us Form */}
                    <div className="mb-8 lg:mb-0 lg:w-1/3 lg:pr-8">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block mb-2">Name</label>
                                <input type="text" className="w-full p-2 rounded bg-gray-700 text-white" required />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Email</label>
                                <input type="email" className="w-full p-2 rounded bg-gray-700 text-white" required />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2">Message</label>
                                <textarea className="w-full p-2 rounded bg-gray-700 text-white" required></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:w-1/3">
                        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                        <p><strong>Phone:</strong> +123 456 7890</p>
                        <p><strong>Email:</strong> info@techschool.com</p>
                        <p><strong>Location:</strong> 123 Tech Street, City, Country</p>
                    </div>
                </div>
            </footer>
            <Notification
                message="Your message has been successfully submitted!"
                show={showNotification}
                onClose={() => setShowNotification(false)}
            />
        </>
    );
};

export default Footer;
