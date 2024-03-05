"use client"

interface LoginBtnProps  {
    children : React.ReactNode;
    mode? : "modal" | "redirect";
    asChild? : boolean;
}

export const LoginButtonWrapper = ({
    children,
    mode = "redirect",
    asChild
}:LoginBtnProps) =>{

    const onClick=()=>{
        console.log('>>>>>>>>>>>Login Button Clicked')
    }

    return ( 
        <>
        <span className="cursor-pointer" onClick={onClick}>{children}</span>
        </>
     );
}

