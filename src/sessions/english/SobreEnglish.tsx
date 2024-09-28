import "../../assets/styles/intro-sobre.scss";
import { RiExternalLinkFill } from "react-icons/ri";

const SobreEnglish = () => {
    return (
        <div className="sobre-container">
            <div className="sobre" id="sobre">
                <div className="sobre-titulo">
                    <h2 className="h2s">
                        &#123;rickreisme&#47;<span>about</span>&#125;
                    </h2>
                </div>

                <div className="paragrafo">
                    <p>
                        I consider myself a problem-solver with the
                        ability to learn quickly, and I am constantly
                        striving to improve.
                    </p>

                    <p>
                        I have accumulated knowledge and experience in
                        development, with solid skills in React,
                        HTML/CSS/, JavaScript/TypeScript, Sass, and
                        Node.js, along with relevant knowledge in SQL,
                        PHP, Flutter, Docker, REST API, Bootstrap,
                        Firebase, among other technologies.
                    </p>

                    <div className="btns-sobre">
                        <a
                            className="btn"
                            href="https://drive.google.com/file/d/1l2M9wv8T3dlI6t6YFni10DVxrAKkfRBB/view?usp=drive_link"
                            target="_blank"
                        >
                            <RiExternalLinkFill className="link-icon" />
                            <h2>My CV</h2>
                        </a>

                        <a
                            className="btn"
                            href="mailto:ricksonreisamoroso@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h2>Send an email</h2>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SobreEnglish;
