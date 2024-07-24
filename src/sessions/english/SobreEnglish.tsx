import "../../assets/styles/intro-sobre.scss";
import { RiExternalLinkFill } from "react-icons/ri";

const SobreEnglish = () => {
    return (
        <div>
            <div className="sobre" id="sobre">
                <div className="sobre-titulo">
                    <h2 className="h2s">
                        &#123;rickreisme&#47;<span>about</span>&#125;
                    </h2>
                </div>

                <div className="paragrafo">
                    <p>
                        Hello, my name is Rickson Reis! I am a developer
                        passionate about what I do! <br />
                        Graduated in Systems Analysis and Development, I'm an
                        advanced english speaker, I have solid expertise in
                        HTML, CSS, JavaScript, and React.js. Additionally, I
                        have excellent command of SQL (PostgreSQL, Oracle, SQL
                        Server), Flutter, Docker, REST APIs, Axios, Bootstrap,
                        ASP.NET Core, Python and Firebase. I have the ability to
                        solve problems and am a quick learner. I invite you to
                        explore this portfolio to learn more about my experience
                        and skills.
                    </p>

                    <a
                        className="btn"
                        href="https://drive.google.com/file/d/1l2M9wv8T3dlI6t6YFni10DVxrAKkfRBB/view?usp=drive_link"
                        target="_blank"
                    >
                        <RiExternalLinkFill className="link-icon" />
                        <h2>See my CV</h2>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SobreEnglish;
