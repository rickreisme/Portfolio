import "../../assets/styles/contato.scss";

import {
    FaGithub,
    FaLinkedin,
    FaBehanceSquare,
    FaInstagram,
} from "react-icons/fa";

const ContatoEnglish = () => {
    return (
        <div className="contato" id="contato">
            <h2>
                &#123;rickreisme&#47;<span>contact</span>&#125;
            </h2>

            <div className="colunaC">
                <div className="content-contato">
                    <h3 className="estou">
                        I would love to discuss how I can contribute
                        to your company's success or help transform
                        your idea into a beautiful and efficient
                        solution. Let's talk? Get in touch with me and
                        let's make it happen! Feedback is always
                        welcome too.
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
                                placeholder="Name *"
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
                                placeholder="Message *"
                                cols={30}
                                rows={10}
                                required
                            ></textarea>
                        </label>

                        <button type="submit">
                            <h4>Send</h4>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContatoEnglish;
