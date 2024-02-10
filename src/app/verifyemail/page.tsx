'use client';

import {useEffect, useState} from "react";
import axios from "axios";
import {set} from "mongoose";

export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post("/api/users/verifyemail", {token});
            setVerified(true);
        } catch (error: any) {
            console.log("Error verifying email", error.message);
            setError(true);
        }

    }


    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken);

    }, []);
    useEffect(() => {
        if (token.length > 0) verifyUserEmail();

    }, [token]);
    return (
        <>

        </>
    );
}