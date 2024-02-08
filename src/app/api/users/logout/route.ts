import {NextResponse} from "next/server";

export default function GET() {

    try {

        const response = NextResponse.json({message: "User logged out successfully"}, {status: 200});
        response.cookies.set("token", "", {httpOnly: true})
        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }

}
