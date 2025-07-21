import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('user');
    const [specialization, setSpecialization] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('userInfo')) {
            navigate('/');
        }
    }, [navigate]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setError('');
        setLoading(true);
        try {
            const config = { headers: { 'Content-Type': 'application/json' } };
            const { data } = await axios.post(
                '/api/auth/register',
                { name, email, password, role, specialization },
                config
            );
            localStorage.setItem('userInfo', JSON.stringify(data));
            setLoading(false);
            navigate(`/dashboard/${data.role}`);
            window.location.reload();
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed');
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h1>
                {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
                <form onSubmit={submitHandler}>
                    {/* Common Fields */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Full Name</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3" id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                    
                    {/* Role Selection */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Register as</label>
                        <select value={role} onChange={(e) => setRole(e.target.value)} className="shadow border rounded w-full py-2 px-3">
                            <option value="user">Patient</option>
                            <option value="doctor">Doctor</option>
                        </select>
                    </div>

                    {/* Doctor-specific field */}
                    {role === 'doctor' && (
                         <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialization">Specialization</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3" id="specialization" type="text" placeholder="e.g., Cardiology" value={specialization} onChange={(e) => setSpecialization(e.target.value)} required />
                        </div>
                    )}

                    <button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;