import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const userID = localStorage.getItem('userID');
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch(`http://localhost:8080/dashboard/${userID}`);
                const data = await response.json();
                setBookings(data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, [userID]);

    return (
        <div className="flex flex-col font-poppins items-center p-6 md:p-10 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-semibold mb-6 text-blue-700">Your Bookings</h2>

            {bookings.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-8xl">
                    {bookings.map((booking, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6 border border-gray-200 transition-transform hover:scale-105">
                            <div className="flex items-center gap-4 mb-3">
                                <img
                                    src={booking.expert_image || '/assets/placeholder_avatar.jpg'}
                                    alt="Expert"
                                    className="w-24 h-24 rounded-full border border-gray-300"
                                />
                                <div>
                                    <p className="text-2xl font-medium text-gray-800">{booking.expert_name}</p>
                                    <p className="text-sm text-gray-500">Expert</p>
                                </div>
                            </div>
                            <div className="text-sm text-gray-700">
                                <p><strong>Session Duration:</strong> {booking.session_duration}</p>
                                <p><strong>Session Mode:</strong> {booking.session_mode}</p>
                                <p><strong>Rate:</strong> ${booking.rate}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600 text-lg mt-10">No bookings found</p>
            )}
        </div>
    );
};

export default Dashboard;
