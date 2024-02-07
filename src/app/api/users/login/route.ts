import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";


connect();

export async  function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;

        const user = await User.findOne({email});
        if(!user) {
            return NextResponse.json({error: "User doesn't exist!"}, {status: 400})
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch) {
            return NextResponse.json({error: "Invalid credentials!"}, {status: 400})
        }

    }
    catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}