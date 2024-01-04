import { NextResponse } from "next/server";

export function GET(request,{params}){
      const {userId,posts} = params;
      console.log('>>>>>>>>>>>', userId)
    return NextResponse.json(params)
}