import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setMessage("Please enter your email address.");
            return;
        }

        setIsLoading(true);

        // Simulate an API call to reset the password
        setTimeout(() => {
            setIsLoading(false);
            setMessage("A password reset link has been sent to your email.");
            setEmail('');
        }, 2000);  // Simulated delay for the API call
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700">Forgot Your Password?</h2>
                <p className="text-center text-sm text-gray-500 mt-2">Enter your email address and we'll send you a link to reset your password.</p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Message */}
                    {message && (
                        <div className="mt-4 text-center text-sm text-gray-700">
                            {message}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full mt-4 py-3 text-white font-semibold rounded-lg ${isLoading ? 'bg-gray-500' : 'bg-yellow-500 hover:bg-yellow-600'}`}
                    >
                        {isLoading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Remembered your password?{' '}
                        <a href="/login" className="text-yellow-500 hover:text-yellow-400">Login here</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
