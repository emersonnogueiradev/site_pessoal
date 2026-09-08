import ItemProjeto from "./ItemProjeto";

export default function Projetos() {
    return (
        <div className="p-5">
            <div className="grid grid-cols-2 gap-6">

                <ItemProjeto
                    title="Sistema de Estoque"
                    description="Sistema desenvolvido para controle de entrada e saída de produtos, permitindo o gerenciamento do estoque de forma organizada e centralizada."
                    technologies={["PHP", "JavaScript", "MYSQL"]}
                />

                <ItemProjeto
                    title="Sistema de inscrições de artistas para eventos no Centro Cultural Bom Jardim"
                    description="Sistema desenvolvido para gerenciamento das inscrições de artistas para eventos."
                    technologies={["PHP", "JavaScript", "MYSQL"]}
                />

            </div>
        </div>
    )
}