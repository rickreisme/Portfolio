import "../../assets/styles/intro-sobre.scss"
import { RiExternalLinkFill } from "react-icons/ri";
import imgSobre from "../../assets/SVGs/Programmer-pana.svg"

const SobreEnglish = () => {
    return (
        <div>
            <div className='sobre' id='sobre'>
                <div className='imagem-sobre'>
                    <img src={imgSobre}></img>
                </div>

                <div className='sobre-titulo'>
                    <h2 className="h2s">&#123;rickreisme&#47;<span>about</span>&#125;</h2>

                    <a className='btn' href="https://drive.google.com/file/d/1l2M9wv8T3dlI6t6YFni10DVxrAKkfRBB/view?usp=drive_link" target="_blank">
                        <RiExternalLinkFill className="link-icon" />
                        <h2>See my CV</h2>
                    </a>
                </div>

                <div className="paragrafo">
                    <h1><span>About me</span></h1><br />
                    <p>
                        I have always liked technology, but it was when I enrolled in the Systems Analysis and Development course
                        that my interest in programming emerged.<br /> I have knowledge in <span>HTML</span>, <span>CSS</span>, and
                        <span> JavaScript</span>, intermediate skills in <span>SQL</span> (<span>PostgreSQL</span>, <span>Oracle</span>),
                        <span> Git/GitHub</span>, skills in <span>ASP.NET Core</span>, <span>Docker</span>, <span>React.js</span>,
                        <span> Python</span>, <span>Flutter</span>, and <span>Firebase</span>, and <span>advanced English</span>.<br />
                        I have a strong <span>desire to learn</span> and am a <span>quick learner</span> with ease in
                        <span>problem-solving</span> and <span>organization</span>.<br /> I like to improve my skills through
                        <span>constant practice and study</span>, with creativity, <span>collaboration</span>, and respect for
                        <span>professional ethics</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SobreEnglish;
