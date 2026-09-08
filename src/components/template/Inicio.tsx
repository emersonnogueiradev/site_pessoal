
import perfil from "../../assets/perfil.jpeg";
import {
    IconBrandReact,
    IconBrandTypescript,
    IconBrandJavascript,
    IconBrandTailwind,
    IconBrandPhp
} from "@tabler/icons-react";

export default function Inicio() {  

    return (
        <div className="flex flex-col flex-1 justify-center items-center text-white px-6">
            <img src={perfil} alt="Foto de perfil" className="rounded-full w-40 h-40 mb-4" />

            <p className="text-lg text-center max-w-2xl leading-relaxed">
                Olá! Sou Emerson Nogueira, profissional da área de
                Tecnologia da Informação e desenvolvedor Web.
                Sou apaixonado por tecnologia e desenvolvimento de sistemas.
                Gosto de transformar problemas em soluções através da
                programação e estou sempre buscando aprender novas tecnologias.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-6">
                Tecnologias
            </h2>

            <div className="flex flex-wrap justify-center gap-6">

                <div className="flex flex-col items-center gap-2">
                    <IconBrandReact size={40} />
                    <span>React</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <IconBrandTypescript size={40} />
                    <span>TypeScript</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <IconBrandJavascript size={40} />
                    <span>JavaScript</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <IconBrandTailwind size={40} />
                    <span>Tailwind</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <IconBrandPhp size={40} />
                    <span>PHP</span>
                </div>

            </div>

        </div>
    );
    
}


