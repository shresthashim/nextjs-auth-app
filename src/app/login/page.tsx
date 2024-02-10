'use client';
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import axios from "axios";
import {useRouter} from "next/navigation";
import {toast} from "react-hot-toast";

const LoginPage = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const onLogin = async (e: any) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/users/login", user);
            router.push("/profile");

        } catch (e: any) {
            toast.error(e.message);
        }

    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-semibold mb-4">Login</h1>
            <form onSubmit={onLogin} className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        autoComplete={'email'}
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        className="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        id="email"
                        type="text"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        autoComplete={'password'}
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                        className="w-full  text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    disabled={buttonDisabled}
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Login
                </button>
            </form>
            <p className="text-sm">
                Don&apos; have an account?{' '}
                <Link href="/signup" className="text-blue-500 hover:underline">Sign up here</Link>
            </p>
        </div>
    );
};

export default LoginPage;
