import { Poppins } from "next/font/google";

const font = Poppins({
    subsets : ["latin"],
    weight  : ["600"]
})

interface cardHeaderProps{
  label : string
}
const Header = ({label}:cardHeaderProps ) => {
    return (<>
    <div className="h-full w-full flex flex-col  justify-center items-center gap-y-4">
     <h1 className="text-5xl text-blue-900 font-semibold">
        🔐Auth
     </h1>
     <p className="text-muted-foreground">{label}</p>
    </div>
    </> )
}
 
export default Header;