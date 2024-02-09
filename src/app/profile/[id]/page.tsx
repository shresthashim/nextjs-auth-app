'use client';
import React, {useState, useEffect} from 'react';
import Link from "next/link";
import axios from "axios";

const UserProfile = ({params}: any) => {
    const [user, setUser] = useState({username: "", email: "", isAdmin: false});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = async () => {
        try {
            const res = await axios.get(`/api/users/me`);
            const userData = res.data.data;
            setUser(userData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching user information:", error);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="p-8">
                    <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">User Profile</div>
                    {loading ? (
                        <div className="animate-pulse mt-4 space-y-2">
                            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                            <div className="h-6 bg-gray-200 rounded"></div>
                            <div className="h-6 bg-gray-200 rounded w-5/6"></div>
                        </div>
                    ) : (
                        <div className="mt-4 text-lg text-gray-900">
                            <p><strong>Name:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Admin Status:</strong> {user.isAdmin ? "Yes" : "No"}</p>
                        </div>
                    )}
                    <div className="mt-6 flex justify-center">
                        <Link href="/profile">
                            <h3 className="text-indigo-500 hover:text-indigo-600 transition duration-300 ease-in-out transform hover:scale-110">Back</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
