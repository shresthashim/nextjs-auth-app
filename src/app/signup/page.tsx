'use client';

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import axios from "axios";
import {useRouter} from "next/router";

const SignupPage = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);


    const onSignUp = async () => {


    }


    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.fullName.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <form className="max-w-md w-full">
                <div className="mb-6">
                    <label htmlFor="fullName" className="text-sm font-bold text-gray-600">
                        Full Name
                    </label>
                    <input
                        className="p-3 mt-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        id="fullName"
                        value={user.fullName}
                        onChange={(e) => setUser({...user, fullName: e.target.value})}
                        type="text"
                        placeholder="Enter your full name"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="text-sm font-bold text-gray-600">
                        Email
                    </label>
                    <input
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        className="p-3 mt-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                        className="p-3 mt-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                >
                    Sign Up
                </button>
            </form>
            <p className="mt-4">
                Already have an account?{' '}
                <Link href="/login">
                    <span className="text-blue-500 hover:underline">Login here</span>
                </Link>
            </p>
        </div>
    );
};

export default SignupPage;
