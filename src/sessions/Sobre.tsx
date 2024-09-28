import "../assets/styles/intro-sobre.scss";
import { RiExternalLinkFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Sobre = () => {
    return (
        <div className="sobre-container" id="sobre">
            <motion.div
                className="sobre"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
            >
                <div className="sobre-titulo">
                    <h2 className="h2s">
                        &#123;rickreisme&#47;<span>sobre</span>&#125;
                    </h2>
                </div>

                <div className="paragrafo">
                    <p>
                        Me considero uma pessoa com facilidade para
                        resolver problemas e um aprendiz rápido que
                        está constantemente buscando se aprimorar.
                    </p>

                    <p>
                        Acumulo conhecimento e experiência em
                        desenvolvimento, com habilidades sólidas em
                        React, HTML/CSS/, JavaScript/TypeScript, Sass e
                        Node.js somadas a um conhecimento relevante em
                        SQL, PHP, Flutter, Docker, API REST,
                        Bootstrap, Firebase entre outras tecnologias.
                    </p>

                    <div className="btns-sobre">
                        <a
                            className="btn"
                            href="https://drive.google.com/file/d/1JqwzlRzxOmRHyj4rFPqQ4ceiSdLMRNB5/view?usp=sharing"
                            target="_blank"
                        >
                            <RiExternalLinkFill className="link-icon" />
                            <h2>Meu currículo</h2>
                        </a>

                        <a
                            className="btn"
                            href="mailto:ricksonreisamoroso@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h2>Enviar e-mail</h2>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Sobre;
