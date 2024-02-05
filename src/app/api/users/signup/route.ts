import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";


connect();

export async function POST(request: NextRequest) {
    const {fullname, email, password} = await request.json();
    try {
        //Check if user already exists
       const user =  await User.findOne({email})
         if(user) {
              return NextResponse.json({error: "User already exists"}, {status: 400});

            }
        //Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

       const newUser =  new User({fullname, email, password: hashedPassword});
       const savedUser =  await newUser.save();

         return NextResponse.json({message: "User created successfully"}, {status: 201});

    } catch (error : any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
