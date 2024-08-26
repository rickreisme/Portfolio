import "../assets/styles/habilidades-projetos.scss";

interface HabilidadeProps {
    id: string;
    className: string;
    Icon?: React.ElementType;
    iconUrl?: string;
    nome: string;
    title?: string;
}

const HabilidadeCard: React.FC<HabilidadeProps> = ({
    id,
    className,
    Icon,
    iconUrl,
    nome,
}) => {
    return (
        <a id={id} className={className}>
            {Icon && (
                <i>
                    <Icon />
                </i>
            )}
            {iconUrl && !Icon && (
                <img
                    className="image-icon"
                    src={iconUrl}
                    alt={`${nome} logo`}
                />
            )}
            <h2>{nome}</h2>
        </a>
    );
};

export default HabilidadeCard;
