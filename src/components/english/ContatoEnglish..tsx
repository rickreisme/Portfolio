import "../../assets/styles/contato.scss"

import { FaGithub, FaLinkedin, FaBehanceSquare, FaLink } from "react-icons/fa";

const ContatoEnglish = () => {
    return (
        <div className='contato' id='contato'>
            <h2>&#123;rickreisme&#47;<span>contact</span>&#125;</h2>

            <div className='colunaC'>
                <h3 className="estou">
                    I am looking for  job opportunities, please contact me by email
                    clicking on the button below or via LinkedIn.
                    Feedbacks are also always welcome!
                </h3>

                <a className='btn6' href='mailto:ricksonreisamoroso@gmail.com' target='_blank' rel="noreferrer">
                    <h4>Send an email</h4>
                </a>

                <div className='sociais'>
                    <h3>Follow me on:</h3>
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

export default ContatoEnglish