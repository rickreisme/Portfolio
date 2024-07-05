import "../assets/styles/intro-sobre.scss"
import { RiExternalLinkFill } from "react-icons/ri";

const Sobre = () => {
    return (
        <div>
            <div className='sobre' id='sobre'>

                <div className='sobre-titulo'>
                    <h2 className="h2s">&#123;rickreisme&#47;<span>sobre</span>&#125;</h2>
                </div>

                <div className="paragrafo">
                    <p>
                        Olá, meu nome é Rickson Reis! Sou um desenvolvedor apaixonado pelo que faço! <br />
                        Graduado em Análise e Desenvolvimento de Sistemas, com inglês avançado, tenho habilidades 
                        sólidas em HTML, CSS, JavaScript e React.js. Além disso, possuo um excelente domínio em SQL 
                        (PostgreSQL, Oracle), Flutter, Docker, API REST, Axios, Bootstrap, ASP.NET Core, Python, 
                        Flutter e Firebase. Te convido a conhecer, nesse portfólio, um pouco mais da minha experiência 
                        e habilidades.
                    </p>

                    <a className='btn' href="https://flowcv.com/resume/di16gfcff3" target="_blank">
                        <RiExternalLinkFill className="link-icon" />
                        <h2>Ver currículo</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sobre;
