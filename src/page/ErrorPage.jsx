import React from 'react';
import { Link } from 'react-router-dom'; // For navigation back to home

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
                <p className="text-xl text-gray-700 mt-4">Something went wrong.</p>
                <p className="text-lg text-gray-500 mt-2">We couldn't find the page you're looking for.</p>
                <div className="mt-6">
                    <Link to="/" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
                        Go to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
