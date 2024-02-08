import {getDataFromToken} from "@/helpers/getDataFromToken";

import {NextRequest, NextResponse} from "next/server";
import User from "@/models/userModel";
import {connect} from "@/dbConfig/dbConfig";

connect();

export async function GET(req: NextRequest) {
    try {
        const id = await getDataFromToken(req);
        const user = await User.findOne({_id: id}).select("-password");
        return NextResponse.json({
            message: "User data found",
            data : user
        });
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
