import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorDashboard = () => {
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    useEffect(() => {
        if (!userInfo || userInfo.role !== 'doctor') {
            navigate('/login/doctor');
        }
    }, [navigate, userInfo]);

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800">Doctor Dashboard</h1>
            <p className="mt-2 text-gray-600">Welcome, Dr. {userInfo?.name}!</p>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Patient Appointments</h2>
                <p className="mt-2 text-gray-500">Appointment management for doctors will be here.</p>
            </div>
        </div>
    );
};

export default DoctorDashboard;