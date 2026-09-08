import { IconFolderCode, IconHome2, IconMail } from "@tabler/icons-react";
import ItensMenu from "./ItensMenu";

export default function Menu(){
    return (
        <div className="flex  h-full w-1/6 bg-zinc-700 ">
            <div className="h-1/20 w-full flex flex-col p-10 gap-4 ">
                <ItensMenu text="Início" url="/inicio" icon={IconHome2}/>
                <ItensMenu text="Projetos" url="/projetos" icon={IconFolderCode}/>
                <ItensMenu text="Contatos" url="/contatos" icon={IconMail}/>
            </div>


        </div>
    );
}


