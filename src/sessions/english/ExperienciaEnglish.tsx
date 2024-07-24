import "../../assets/styles/experiencia-projetos.scss";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaDocker,
    FaPython,
    FaFigma,
    FaSass,
    FaNodeJs,
    FaBootstrap,
    FaPaintBrush,
} from "react-icons/fa";

import {
    SiFlutter,
    SiOracle,
    SiMicrosoftsqlserver,
    SiCsharp,
    SiAxios,
    SiTypescript,
} from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";
import { TbHttpGet } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { LuLayout } from "react-icons/lu";

const ExperienciaEnglish = () => {
    return (
        <div className="experiencia" id="experiencia">
            <h2 className="tituloxp">
                &#123;rickreisme&#47;<span>skills</span>&#125;
            </h2>

            <h3>Tecnologies I use</h3>

            <div className="habilidades">
                <a className="btn2" id="React">
                    <i title="React Router, React Hooks, Context API">
                        {" "}
                        <FaReact />{" "}
                    </i>
                    <h2 title="React Router, React Hooks, Context API">
                        React.js
                    </h2>
                </a>

                <a className="btn2b" id="Postg">
                    <i>
                        {" "}
                        <BiLogoPostgresql />{" "}
                    </i>
                    <h2>PostgreSQL</h2>
                </a>

                <a className="btn2" id="Flutter">
                    <i>
                        {" "}
                        <SiFlutter />{" "}
                    </i>
                    <h2>Flutter</h2>
                </a>

                <a className="btn2" id="HTML">
                    <i>
                        {" "}
                        <FaHtml5 />{" "}
                    </i>
                    <h2>HTML</h2>
                </a>

                <a className="btn2" id="CSS">
                    <i>
                        {" "}
                        <FaCss3Alt />{" "}
                    </i>
                    <h2>CSS</h2>
                </a>

                <a className="btn2" id="JS">
                    <i>
                        {" "}
                        <FaJs />{" "}
                    </i>
                    <h2>JavaScript</h2>
                </a>

                <a className="btn2b" id="Oracle">
                    <i>
                        {" "}
                        <SiOracle />{" "}
                    </i>
                    <h2>Oracle DB</h2>
                </a>

                <a className="btn2b" id="Git">
                    <i>
                        {" "}
                        <FaGitAlt />{" "}
                    </i>
                    <h2>Git</h2>
                </a>

                <a className="btn2b" id="Docker">
                    <i>
                        {" "}
                        <FaDocker />{" "}
                    </i>
                    <h2>Docker</h2>
                </a>

                <a className="btn2b" id="API">
                    <i>
                        {" "}
                        <TbHttpGet />{" "}
                    </i>
                    <h2>API REST</h2>
                </a>

                <a className="btn2b" id="Axios">
                    <i>
                        {" "}
                        <SiAxios />{" "}
                    </i>
                    <h2>Axios</h2>
                </a>

                <a className="btn2" id="Sass">
                    <i>
                        {" "}
                        <FaSass />{" "}
                    </i>
                    <h2>SCSS</h2>
                </a>

                <a className="btn2b" id="Node">
                    <i>
                        {" "}
                        <FaNodeJs />{" "}
                    </i>
                    <h2>Node.js</h2>
                </a>

                <a className="btn2" id="Bootstrap">
                    <i>
                        {" "}
                        <FaBootstrap />{" "}
                    </i>
                    <h2>Bootstrap</h2>
                </a>

                <a className="btn2b" id="C#">
                    <i>
                        {" "}
                        <SiCsharp />{" "}
                    </i>
                    <h2>C#</h2>
                </a>

                <a className="btn2b" id="ASP">
                    <i className="devicon-dotnetcore-plain"></i>
                    <h2>ASP.NET</h2>
                </a>

                <a className="btn2o" id="TS">
                    <i>
                        {" "}
                        <SiTypescript />{" "}
                    </i>
                    <h2>TypeScript</h2>
                </a>

                <a className="btn2b" id="Cpp">
                    <i className="devicon-cplusplus-plain"></i>
                    <h2>C++</h2>
                </a>

                <a className="btn2b" id="Python">
                    <i>
                        {" "}
                        <FaPython />{" "}
                    </i>
                    <h2>Python</h2>
                </a>

                <a className="btn2b" id="SqlSrv">
                    <i>
                        {" "}
                        <SiMicrosoftsqlserver />
                    </i>
                    <h2>SQL Server</h2>
                </a>

                <a className="btn2o" id="Figma">
                    <i>
                        {" "}
                        <FaFigma />{" "}
                    </i>
                    <h2>Figma</h2>
                </a>

                <a className="btn2o" id="Vscode">
                    <i>
                        {" "}
                        <VscVscode />{" "}
                    </i>
                    <h2>VsCode</h2>
                </a>
            </div>

            <h3 className="diferenciais-titulo">Another skills </h3>

            <div className="diferenciais">
                <div className="card">
                    <div className="card-titulo">
                        <h3>Design Skills</h3>
                    </div>

                    <div className="card-body">
                        <FaPaintBrush className="card-icon" />
                        <p>
                            I have a strong passion for design, and over the
                            years, through courses, practice, and freelance
                            work, I have gained knowledge that allows me to
                            showcase this in my projects.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-titulo">
                        <h3>UI/UX Skills</h3>
                    </div>

                    <div className="card-body">
                        <LuLayout className="card-icon" />
                        <p>
                            I have always been interested in user interfaces and
                            experiences, and I translate my acquired knowledge
                            on the subject into attractive and functional
                            designs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienciaEnglish;
