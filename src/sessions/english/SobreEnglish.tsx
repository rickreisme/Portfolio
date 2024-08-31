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
                        I have always been very curious and passionate
                        about technology and innovations. My first
                        contact with programming languages was in a
                        course I took when I was 13 or 14 years old,
                        around the same time I also fell in love with
                        design. But it was when I enrolled in the
                        Systems Analysis and Development course at
                        Faculdade de Tecnologia de Ribeirão Preto
                        (Ribeirão Preto College of Technology) that I
                        truly found my place in the world of
                        programming and decided that this was what I
                        wanted for my life. I consider myself a
                        problem-solver with the ability to learn
                        quickly, and I am constantly striving to
                        improve.
                    </p>

                    <p>
                        Today, as a graduate, I have accumulated
                        knowledge and experience in development, with
                        solid skills in React, HTML/CSS/JavaScript,
                        Sass, TypeScript, and Node.js, along with
                        relevant knowledge in SQL, Flutter, Docker,
                        REST API, Bootstrap, Firebase, among other
                        technologies. I invite you to explore my
                        portfolio to learn more about my experience
                        and skills.
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
