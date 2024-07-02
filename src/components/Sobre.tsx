import "../assets/styles/intro-sobre.scss"
import { RiExternalLinkFill } from "react-icons/ri";
import imgSobre from "../assets/SVGs/Programmer-pana.svg"

const Sobre = () => {
    return (
        <div>
            <div className='sobre' id='sobre'>
                <div className='imagem-sobre'>
                    <img src={imgSobre}></img>
                </div>

                <div className='sobre-titulo'>
                    <h2 className="h2s">&#123;rickreisme&#47;<span>sobre</span>&#125;</h2>

                    <a className='btn' href="https://flowcv.com/resume/di16gfcff3" target="_blank">
                        <RiExternalLinkFill className="link-icon" />
                        <h2>Ver currículo</h2>
                    </a>
                </div>

                <div className="paragrafo">
                    <h1><span>Sobre Mim</span></h1><br />
                    <p>
                        Sou um desenvolvedor apaixonado pelo que faço! Graduado em <span>Análise e Desenvolvimento
                        de Sistemas</span> pela <span>Faculdade de Tecnologia de Ribeirão Preto</span>,
                        com <span>inglês avançado</span>, tenho habilidades sólidas em <span>HTML</span>,
                        <span> CSS</span>, <span>JavaScript</span> e <span>React.js</span>.
                        Além disso, possuo um excelente domínio em <span>SQL</span> (<span>PostgreSQL</span>,
                        <span>Oracle</span>), <span>Flutter</span>, <span>Docker</span>, <span>API REST</span>,
                        <span> Axios</span>, <span>Bootstrap</span>, <span>ASP.NET Core</span>, <span>Python</span>,
                        <span> Flutter</span> e <span>Firebase</span>. Te convido a conhecer, nesse portfólio, um pouco mais da minha
                        experiência e habilidades.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sobre;
