"use-client"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Button } from "../ui/button";

const Social = () => {
    return (
        <>
       <div className="w-full flex items-center gap-x-2">
        <Button size="lg" variant="outline" className="w-full">
        <FcGoogle className="text-2xl" />
        </Button>
        <Button size="lg" variant="outline" className="w-full">
        <FaGithub  className="text-2xl" />
        </Button>
       </div>
        </>
      );
}
 
export default Social;