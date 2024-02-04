import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <form className="max-w-md w-full">
                <div className="mb-6">
                    <label htmlFor="email" className="text-sm font-bold text-gray-600">
                        Email
                    </label>
                    <input
                        className="p-3 mt-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black"
                        id="email"
                        type="text"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="text-sm font-bold text-gray-600">
                        Password
                    </label>
                    <input
                        className="p-3 mt-2 w-full border text-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                >
                    Login
                </button>
            </form>
            <p className="mt-4">
                Don&apos;t have an account?{' '}
                <Link href="/signup">
                    <span  className="text-blue-500 hover:underline">Visit Signup page</span>
                </Link>
            </p>
        </div>
    );
};

export default LoginPage;
