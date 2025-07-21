import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Smart Hospital</h1>
            <p className="text-gray-600 mb-8">Your health, our priority. Schedule your appointments with ease.</p>
            
            {userInfo ? (
                <div>
                    <p className="text-xl mb-4">Hello, <span className="font-semibold">{userInfo.name}</span>!</p>
                    <Link 
                        to={`/dashboard/${userInfo.role}`} 
                        className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300"
                    >
                        Go to Your Dashboard
                    </Link>
                </div>
            ) : (
                <div className="space-x-4">
                    <Link to="/login/user" className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
                        Get Started
                    </Link>
                    <Link to="/register" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition duration-300">
                        Create an Account
                    </Link>
                </div>
            )}
        </div>
    );
};

export default HomePage;
