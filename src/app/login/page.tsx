import React from 'react';
import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">


            <label htmlFor="email">Email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"

                placeholder="Enter your email"
            />
            <label htmlFor="password">Password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="password"

                placeholder="Enter your password"
            />
            <button

                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login
                here
            </button>
            <Link href="/signup">Visit Signup page</Link>
        </div>
    )
};

export default LoginPage;