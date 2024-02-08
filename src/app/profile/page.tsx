'use client';
import React from 'react';
import axios from "axios";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
const ProfilePage = () => {
    const router = useRouter();

    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logged out successfully");
            router.push("/login");

        } catch (e: any) {
            console.log(e);
            toast.error(e.message);

        }
    };
        return (<div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
                    <button onClick={logout}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout
                    </button>
                </div>
            </div>
        );

}
export default ProfilePage;