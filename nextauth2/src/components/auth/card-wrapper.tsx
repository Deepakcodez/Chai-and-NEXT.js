"use-client"
import { Card, CardContent, CardFooter, CardTitle , CardHeader } from "../ui/card";

interface CardWrapperProps{
    children : React.ReactNode;
    headerLabel : string;
    backButtonLabel : string;
    backButtonHref : string;
    showSocial? : boolean;
}
const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
    
}:CardWrapperProps) => {
    return ( 
    <>
    <Card className="w-[40rem] shadow-md">
     {children}
    </Card>
    </>
     );
}
 
export default CardWrapper;