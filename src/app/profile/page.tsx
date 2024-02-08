import React from 'react';

const ProfilePage = () => {
    return (<div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
            </div>
        </div>
    );
};

export default ProfilePage;