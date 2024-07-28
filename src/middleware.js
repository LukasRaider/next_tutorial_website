import { NextResponse } from "next/server";

export function middleware(request) {
    if (request.nextURL.pathname != "/Login-form/Signup"){
        return NextResponse.redirect(new URL('/Login-form/Signup', request.url));
    }
}

export const config = {
    matcher: "/Login-form:path*",
};