import Menu from "./Menu";
import Titulo from "./titulo";

export default function Layout(){

    return(

        <div className="w-screen h-screen flex ">
            <Menu/>
            <div className="flex flex-1 flex-col bg-amber-950">
                <Titulo/>
                
                
            </div>
            
        </div>
    )
}