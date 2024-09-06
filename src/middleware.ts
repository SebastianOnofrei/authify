import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req:NextRequest){
    const {pathname, origin} = req.nextUrl;
    const session = await getToken({req,
        secret:process.env.NEXTAUTH_SECRET,
        secureCookie:process.env.NODE_ENV ==="production"
    })

    // CASE in which we are not logged in, we redirect to log in.
    if (pathname == "/"){
        if(!session){
            return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/auth`)
        }
    }
    // CASE In which we already are logged in
    // and we try to sing in again, we redirect to origin
    if (pathname == "/auth"){
        if(session){
            return NextResponse.redirect(`${origin}`)
        }
    }
}