import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    useEffect(() => {
        if (!userInfo || userInfo.role !== 'user') {
            navigate('/login/user');
        }
    }, [navigate, userInfo]);

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800">User Dashboard</h1>
            <p className="mt-2 text-gray-600">Welcome, {userInfo?.name}!</p>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Your Appointments</h2>
                <p className="mt-2 text-gray-500">Appointment functionality will be added here.</p>
            </div>
        </div>
    );
};

export default UserDashboard;