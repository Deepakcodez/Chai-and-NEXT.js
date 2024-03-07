"use-client"
import { Card, CardContent, CardFooter, CardTitle , CardHeader } from "../ui/card";
import Social from "./Social";
import BackButton from "./back-button";
import Header from "./header";

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
    <Card className="w-[25rem] shadow-md">
        <CardHeader>
            <Header label={headerLabel}/>
        </CardHeader>
             <CardContent>
                {children}
             </CardContent>  
            {showSocial && (
            <CardFooter>
             <Social/>
            </CardFooter>
               )}
         <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />   
        </CardFooter>      
    </Card>
    </>
     );
}
 
export default CardWrapper;