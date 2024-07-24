import "../assets/styles/experiencia-projetos.scss";

interface HabilidadeProps {
    id: string;
    className: string;
    Icon: React.ElementType;
    nome: string;
    title?: string;
}

const HabilidadeCard: React.FC<HabilidadeProps> = ({
    id,
    className,
    Icon,
    nome,
}) => {
    return (
        <a id={id} className={className}>
            <i>
                <Icon />
            </i>
            <h2>{nome}</h2>
        </a>
    );
};

export default HabilidadeCard;
