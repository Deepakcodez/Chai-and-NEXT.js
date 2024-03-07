"use-client"

import Link from "next/link";
import { Button } from "../ui/button";


interface BackButtonProps{
  href : string;
  label : string;
}

const BackButton = ({label, href}:BackButtonProps) => {
    return ( 
        <>
        <div className="w-full text-center ">

        <Button variant="link">
            <Link className=" text-center" href={href}> {label} </Link>
        </Button>
        </div>
        </>
    );
}
 
export default BackButton;