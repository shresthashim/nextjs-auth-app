'use client';
import React, {useState} from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {useRouter} from 'next/navigation';
import Link from 'next/link';

const ProfilePage = () => {
    const router = useRouter();
    const [user, setUser] = useState("hey");

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            toast.success('Logged out successfully');
            router.push('/login');
        } catch (e: any) {
            console.log(e);
            toast.error(e.message);
        }
    };

    const getUserDetails = async () => {
        try {
            const res = await axios.get('/api/users/me');
            setUser(res.data.data._id);
        } catch (error) {
            console.log(error);
            toast.error('Failed to fetch user details');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center bg-gray-100 p-8 rounded-lg">
                <h1 className="text-3xl text-black font-bold mb-4">Profile Page</h1>
                {user === 'hey' ? (
                    <p className="text-gray-600">No user details found</p>
                ) : (
                    <Link href={`/profile/${user}`}>
                        <span className="text-blue-500 hover:underline">User ID : {user}</span>
                        <p className='text-black'>Click user id to get all user details!</p>
                    </Link>
                )}

                <div className="mt-8 space-x-4">
                    <button
                        onClick={logout}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Logout
                    </button>
                    <button
                        onClick={getUserDetails}
                        className="bg-amber-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Get User Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
