import { NextResponse } from "next/server"

export function GET(request){

    const users= [
        {
            "name": "deepak",
            "age":20
        },
        {
            "name":"abhi",
            "age":20
        }
    ]
    return NextResponse.json({
        success : true,
        data : users
    },
    {
        status : 200,
        statusText : "custom status text"
    })
}
export function POST(){}
export function PUT(){}
export function PATCH(){}
export function DELETE(){}