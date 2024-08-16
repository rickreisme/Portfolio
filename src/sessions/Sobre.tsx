import "../assets/styles/intro-sobre.scss";
import { RiExternalLinkFill } from "react-icons/ri";

const Sobre = () => {
    return (
        <div>
            <div className="sobre" id="sobre">
                <div className="sobre-titulo">
                    <h2 className="h2s">
                        &#123;rickreisme&#47;<span>sobre</span>&#125;
                    </h2>
                </div>

                <div className="paragrafo">
                    <p>
                        Olá, meu nome é Rickson Reis! Sou um desenvolvedor
                        apaixonado pelo que faço! <br />
                        Graduado em Análise e Desenvolvimento de Sistemas, com
                        inglês avançado, tenho habilidades sólidas em React.js,
                        HTML/CSS, Sass, JavaScript/TypeScript. Além disso, possuo
                        um excelente domínio em SQL (PostgreSQL, Oracle, SQL
                        Server), Flutter, Docker, API REST, Bootstrap,
                        Firebase entre outras tecnologias. Tenho facilidade para
                        resolver problemas e sou um aprendiz rápido. Te convido
                        a conhecer, nesse portfólio, um pouco mais da minha
                        experiência e habilidades.
                    </p>

                    <a
                        className="btn"
                        href="https://drive.google.com/file/d/1JqwzlRzxOmRHyj4rFPqQ4ceiSdLMRNB5/view?usp=sharing"
                        target="_blank"
                    >
                        <RiExternalLinkFill className="link-icon" />
                        <h2>Ver currículo</h2>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sobre;
