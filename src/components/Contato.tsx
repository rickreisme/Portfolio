import "../assets/styles/contato.scss"

import { FaGithub, FaLinkedin, FaBehanceSquare, FaLink } from "react-icons/fa";

const Contato = () => {
    return (
        <div className='contato' id='contato'>
            <h2>&#123;rickreisme&#47;<span>contato</span>&#125;</h2>

            <div className='colunaC'>
                <h3 className="estou">
                    Estou procurando oportunidades no mercado de
                    trabalho, entre em contato comigo por e-mail clicando no
                    botão abaixo ou pelo LinkedIn para propostas.
                    Feedbacks também são sempre bem-vindos!
                </h3>

                <a className='btn6' href='mailto:ricksonreisamoroso@gmail.com' target='_blank' rel="noreferrer">
                    <h4>Enviar e-mail</h4>
                </a>

                <div className='sociais'>
                    <h3>Me acompanhe nas redes sociais</h3>
                    <div className='redes'>
                        <a href='https://github.com/rickreisme' target="_blank" rel="noreferrer">
                            <i id='gith'> <FaGithub /> </i>
                        </a>

                        <a href='https://www.linkedin.com/in/ricksonreis/' target="_blank" rel="noreferrer">
                            <i id='linkd'> <FaLinkedin /> </i>
                        </a>

                        <a href='https://www.behance.net/rickreis1' target="_blank" rel="noreferrer">
                            <i id='beh'> <FaBehanceSquare /> </i>
                        </a>

                        <a href='https://linktr.ee/rickreisme' target="_blank" rel="noreferrer">
                            <i id='linkk'> <FaLink /> </i>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contato
