import "../assets/styles/contato.scss";

import {
    FaGithub,
    FaLinkedin,
    FaBehanceSquare,
    FaInstagram,
} from "react-icons/fa";

const Contato = () => {
    return (
        <div className="contato" id="contato">
            <h2>
                &#123;rickreisme&#47;<span>contato</span>&#125;
            </h2>

            <div className="colunaC">
                <div className="content-contato">
                    <h3 className="estou">
                        Adoraria discutir como posso contribuir para o
                        sucesso da sua empresa ou ajudar a transformar
                        sua ideia em uma solução bonita e eficiente.{" "}
                        <br />
                        Vamos conversar? Entre em contato comigo e
                        vamos fazer acontecer! Feedbacks também são
                        sempre bem-vindos.
                    </h3>

                    <div className="sociais">
                        <a
                            href="https://github.com/rickreisme"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i id="gith">
                                {" "}
                                <FaGithub />{" "}
                            </i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ricksonreis/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i id="linkd">
                                {" "}
                                <FaLinkedin />{" "}
                            </i>
                        </a>

                        <a
                            href="https://www.instagram.com/rickreisme/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i id="insta">
                                <FaInstagram />
                            </i>
                        </a>

                        <a
                            href="https://www.behance.net/rickreis1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i id="beh">
                                {" "}
                                <FaBehanceSquare />{" "}
                            </i>
                        </a>
                    </div>
                </div>

                <div className="content-form">
                    <form
                        action="https://formspree.io/f/mvoyobkd"
                        method="POST"
                        className="form-contato"
                    >
                        <label>
                            <input
                                type="text"
                                name="nome"
                                required
                                placeholder="Nome *"
                            />
                        </label>

                        <label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email *"
                            />
                        </label>

                        <label>
                            <textarea
                                name="message"
                                placeholder="Mensagem *"
                                cols={30}
                                rows={10}
                                required
                            ></textarea>
                        </label>

                        <button type="submit">
                            <h4>Enviar</h4>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contato;
