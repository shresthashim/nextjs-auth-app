'use client'
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post('/api/users/verifyemail', { token });
            setVerified(true);
        } catch (error:any) {
            setError(true);
            console.log(error.message);
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return ( (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl mb-6">Verify Email</h1>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl mb-4">{token ? `Token: ${token}` : "No token found"}</h2>
                {verified ? (
                    <div className="text-green-600">
                        <h2 className="text-2xl mb-4">Email Verified Successfully!</h2>
                        <Link href="/login">
                            <span className="text-blue-600 hover:underline">Login Now</span>
                        </Link>
                    </div>
                ) : error ? (
                    <div className="text-red-600">
                        <h2 className="text-2xl mb-4">Error Verifying Email</h2>
                    </div>
                ) : (
                    <div className="flex items-center justify-center">
                        <svg className="animate-spin h-8 w-8 text-gray-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-1.654 0-3.17-.64-4.307-1.709l-.366-.366zM12 20a8 8 0 008-8h-4c0 1.654-.64 3.17-1.709 4.307l-.366.366zm5.291-7.709A7.962 7.962 0 0112 20v4c4.418 0 8-3.582 8-8h-4c0 1.654-.64 3.17-1.709 4.307l-.366-.366zM12 4a8 8 0 00-8 8h4c0-1.654.64-3.17 1.709-4.307l.366-.366z"></path>
                        </svg>
                        <p className="text-gray-600">Verifying...</p>
                    </div>
                )}
            </div>
        </div>
    ))
}
