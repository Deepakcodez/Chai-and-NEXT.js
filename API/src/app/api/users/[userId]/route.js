import { NextResponse } from "next/server";

// export function DELETE(request,{params}){
//       const {userId} = params;
//       console.log('>>>>>>>>>>>', userId)
//     return NextResponse.json({
//         message: `user deleted ${userId}`
//     })
// }

export function POST(request){

 const body = request.body;
 const header = request.header;
 const method = request.method;
 console.log('>>>>>>>>>>>', method)

    return NextResponse({
method,
header,
body
    })
}