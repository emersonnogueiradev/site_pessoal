interface ItemProjetoProps {
    title: string;
    description: string;
    technologies: string[];
}

export default function ItemProjeto({ title, description, technologies }: ItemProjetoProps) {
    return (
        <div className="rounded-lg bg-zinc-800 p-6 text-white shadow-lg">
            <h2 className="text-2xl font-bold mb-3">
                {title}
            </h2>

            <p className="text-zinc-300 mb-4">
                {description}
            </p>

            <div className="flex gap-2 flex-wrap">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="rounded bg-zinc-700 px-3 py-1 text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
}
