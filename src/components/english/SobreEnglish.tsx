import "../../assets/styles/intro-sobre.scss"
import { RiExternalLinkFill } from "react-icons/ri";

const SobreEnglish = () => {
    return (
        <div>
            <div className='sobre' id='sobre'>

                <div className='sobre-titulo'>
                    <h2 className="h2s">&#123;rickreisme&#47;<span>about</span>&#125;</h2>
                </div>

                <div className="paragrafo">
                    <p>
                        I have always liked technology, but it was when I enrolled in the Systems Analysis and Development course
                        that my interest in programming emerged.
                        I am a <span>advanced English</span> speaker and have experience in <span> HTML</span>, <span>CSS</span>,
                        <span> JavaScript</span>, <span>Git/GitHub</span>, and <span>React.js</span> in addition to a good command of
                        <span> SQL</span> (<span>PostgreSQL</span>, <span>Oracle</span>), <span>Docker</span>, <span>REST API</span>,
                        <span> Axios</span>, <span>Bootstrap</span>, <span>ASP.NET Core</span>, <span>Python</span>, <span>Flutter</span>,
                        and <span>Firebase</span>.
                        I have a strong <span>desire to learn</span> and I'm a <span>quick learner</span> with an aptitude for
                        <span> problem-solving</span> and <span>organization</span>.
                        I enjoy improving my skills through <span>constant practice and study</span>, with
                        <span> creativity</span>, <span>collaboration</span>, always respecting <span>professional ethics</span>.
                    </p>

                    <a className='btn' href="https://drive.google.com/file/d/1l2M9wv8T3dlI6t6YFni10DVxrAKkfRBB/view?usp=drive_link" target="_blank">
                        <RiExternalLinkFill className="link-icon" />
                        <h2>See my CV</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SobreEnglish;
