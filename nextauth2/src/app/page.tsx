import { LoginButtonWrapper } from "@/components/auth/login-btn";
import { Button } from "@/components/ui/button";


export default function Home() {





  return (
   <>
   <div className="h-screen w-full bg-cyan-400 flex flex-col gap-10 justify-center items-center">
    <div className="text-center ">
    <h1 className="text-5xl  font-bold "> 🔐Auth </h1>
    <h5 className="text-gray-600 text-center">simple auth mechanism</h5>
    </div>
    <LoginButtonWrapper mode="redirect">
    <Button>Sign-in</Button>
    </LoginButtonWrapper>
   </div>
   </>
  );
}
