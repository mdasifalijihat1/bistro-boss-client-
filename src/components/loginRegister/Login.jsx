import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Simulate a successful login with SweetAlert2
        Swal.fire({
            title: 'Success!',
            text: 'You have successfully logged in.',
            icon: 'success',
            confirmButtonText: 'OK',
        });

        // Reset the form (optional)
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>
                <p className="text-sm text-gray-600 text-center mb-6">Welcome back! Please enter your details.</p>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-gray-600">Remember me</span>
                        </label>
                        <Link to={'/forgetPassword'} className="text-sm text-blue-600 hover:underline"> Forgot password? </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a href="/register" className="text-blue-600 hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    ); 
};

export default Login;
