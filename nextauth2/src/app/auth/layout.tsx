
import React from "react";


const AuthLayout = ({children}:{children:React.ReactNode})=> {
    return (
        <div className="bg-cyan-400 h-screen flex justify-center items-center ">
            {children}
        </div>
     );
}

export default AuthLayout