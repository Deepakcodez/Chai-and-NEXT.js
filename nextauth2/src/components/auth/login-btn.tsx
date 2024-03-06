"use client"

import { useRouter } from "next/navigation";
interface LoginBtnProps  {
    children : React.ReactNode;
    mode? : "modal" | "redirect";
    asChild? : boolean;
}

export const LoginButtonWrapper = ({
    children,
    mode ,
    asChild
}:LoginBtnProps) =>{

            const router = useRouter();

            const onClick=()=>{
                router.push('/auth/login')
                console.log('>>>>>>>>>>>Login Button Clicked')
            }



            if(mode == "modal"){
            return(
                <>
                <span className="bg-blue-500 px-2 text-white">implement modal logic here</span>
                </>
            )
            }
            return ( 
                <>
                <span className="cursor-pointer" onClick={onClick}>{children}</span>
                </>
            );
}

