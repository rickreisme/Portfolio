import "../assets/styles/habilidades-projetos.scss";
import { useLocation } from "react-router-dom";
import { RiExternalLinkFill } from "react-icons/ri";
import { motion } from "framer-motion";

interface BoxProjetoProps {
    imagem?: string;
    titulo: string;
    descricao: string;
    linkSite?: string;
    linkRepo?: string;
    tecnologias: string;
}

const BoxProjeto: React.FC<BoxProjetoProps> = ({
    imagem,
    titulo,
    descricao,
    linkSite,
    linkRepo,
    tecnologias,
}) => {
    const location = useLocation();
    const isEnglishRoute = location.pathname === "/english";

    return (
        <motion.div
            className="box-projeto"
            title={titulo}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
            viewport={{ once: true }}
        >
            {imagem && (
                <div className="img-projeto">
                    <img src={imagem} alt={`${titulo} logo`} />
                </div>
            )}

            <div className="detalhes-projeto">
                {" "}
                <h2 className="nome-projeto">{titulo}</h2>
                <p>{descricao}</p>
                <div className="btns-projeto">
                    {linkSite && (
                        <a
                            className="btn-link-site"
                            href={linkSite}
                            target="_blank"
                            title={
                                isEnglishRoute
                                    ? "Visit site"
                                    : "Visitar site"
                            }
                        >
                            <RiExternalLinkFill className="link-icon" />
                            Site
                        </a>
                    )}

                    {linkRepo && (
                        <a
                            className="btn-link-git"
                            target="_blank"
                            href={linkRepo}
                            title={
                                isEnglishRoute
                                    ? "See repository"
                                    : "Ver repositório"
                            }
                        >
                            <RiExternalLinkFill className="link-icon" />
                            {isEnglishRoute
                                ? "Repository"
                                : "Repositório"}
                        </a>
                    )}
                </div>
                <h4>{tecnologias}</h4>
            </div>
        </motion.div>
    );
};

export default BoxProjeto;
