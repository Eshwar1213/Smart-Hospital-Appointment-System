import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    useEffect(() => {
        if (!userInfo || userInfo.role !== 'admin') {
            navigate('/login/admin');
        }
    }, [navigate, userInfo]);

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="mt-2 text-gray-600">Welcome, Admin {userInfo?.name}!</p>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">System Management</h2>
                <p className="mt-2 text-gray-500">User, doctor, and appointment management tools will be here.</p>
            </div>
        </div>
    );
};

export default AdminDashboard;