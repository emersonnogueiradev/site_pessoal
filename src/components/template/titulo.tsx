import { useLocation } from "react-router-dom";


export default function Titulo(){
    const location = useLocation();

    console.log(location.pathname)
    return(
        <div className="flex h-1/12 bg-zinc-700  justify-center items-center">
            <h1 className="text-3xl text-white font-bold">
                {location.pathname === "/" || location.pathname === "/inicio"
                    ? "Página Inicial"
                    : location.pathname === "/projetos"
                    ? "Projetos"
                    : location.pathname === "/contatos"
                    ? "Contato"
                    : location.pathname.replace("/", "")
                }
            </h1>        

        </div>        
    )
}