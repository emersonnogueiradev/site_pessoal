
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
    IconBrandWhatsapp
} from "@tabler/icons-react";

export default function Contatos() {
    return (
        <div className="flex flex-1 justify-center items-center p-5 text-white">
            <div className="w-full max-w-xl rounded-lg bg-zinc-800 p-8 shadow-lg">

                <h1 className="text-3xl font-bold mb-3">
                    Vamos conversar?
                </h1>

                <p className="text-zinc-300 mb-8">
                    Se quiser falar sobre tecnologia, desenvolvimento ou
                    oportunidades profissionais, entre em contato comigo.
                </p>

                <div className="flex flex-col gap-4">

                    <a
                        href="mailto:emersonnogueria.dev@gmail.com"
                        className="flex items-center gap-3 rounded-lg bg-zinc-700 p-4 hover:bg-zinc-600"
                    >
                        <IconMail />
                        <span>emersonnogueria.dev@gmail.com</span>
                    </a>

                    <a
                        href="https://wa.me/5585998713765"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-lg bg-zinc-700 p-4 hover:bg-zinc-600"
                    >
                        <IconBrandWhatsapp />
                        <span>85 99871-3765</span>
                    </a>

                    <a
                        href="https://github.com/emersonnogueiradev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-lg bg-zinc-700 p-4 hover:bg-zinc-600"
                    >
                        <IconBrandGithub />
                        <span>GitHub</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/emerson-costa-a62522192/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-lg bg-zinc-700 p-4 hover:bg-zinc-600"
                    >
                        <IconBrandLinkedin />
                        <span>LinkedIn</span>
                    </a>

                </div>
            </div>
        </div>
    );
}

