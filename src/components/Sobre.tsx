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
                        Sempre gostei de tecnologia desde criança, mas foi quando ingressei no curso de
                        Análise e Desenvolvimento de Sistemas, que o meu interesse pela programação
                        surgiu.<br />
                        Possuo <span>inglês avançado</span> e tenho experiência em <span>HTML</span>, <span>CSS</span>,
                        <span> JavaScript</span>, <span>Git/GitHub</span> e <span>React.js</span> além de um bom domínio de
                        <span> SQL</span> (<span>PostgreSQL</span>, <span>Oracle</span>), <span>Docker</span>, <span>API REST </span>,
                        <span> Axios</span>, <span>Bootstrap</span>, <span>ASP.NET Core</span>, <span>Python</span>, <span>Flutter </span>
                        e <span>Firebase</span>.<br />
                        Tenho muita <span>vontade de aprender</span> e sou um <span>aprendiz rápido</span> com facilidade em
                        <span> resolução de problemas </span> e <span>organização</span>.<br />
                        Gosto de aperfeiçoar minhas habilidades por meio de <span>prática e estudo constantes</span>, com
                        <span> criatividade</span>, <span> colaboração</span>, respeitando sempre a <span>ética profissional</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sobre;
