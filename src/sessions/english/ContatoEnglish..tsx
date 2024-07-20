import "../../assets/styles/contato.scss"

import { FaGithub, FaLinkedin, FaBehanceSquare } from "react-icons/fa";

const ContatoEnglish = () => {
    return (
        <div className='contato' id='contato'>
            <h2>&#123;rickreisme&#47;<span>contact</span>&#125;</h2>

            <div className='colunaC'>
                <h3 className="estou">
                    I would love to discuss how I can contribute to your company's success or help 
                    transform your idea into a beautiful and efficient solution. Let's talk? Get 
                    in touch with me and let's make it happen! Feedback is always welcome too.
                </h3>

                <a className='btn6' href='mailto:ricksonreisamoroso@gmail.com' target='_blank' rel="noreferrer">
                    <h4>Send an email</h4>
                </a>

                <div className='sociais'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContatoEnglish