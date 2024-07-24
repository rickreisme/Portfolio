import "../assets/styles/experiencia-projetos.scss";
import HabilidadeCard from "./HabilidadeCard";
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
} from "react-icons/fa";

import {
    SiFlutter,
    SiOracle,
    SiMicrosoftsqlserver,
    SiCsharp,
    SiAxios,
    SiTypescript,
    SiDotnet,
} from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";
import { TbHttpGet } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { PiFileCppFill } from "react-icons/pi";

const Habilidades = () => {
    return (
        <div className="habilidades">
            <HabilidadeCard
                id="React"
                className="btn2"
                Icon={FaReact}
                nome="React"
                title="React Router, React Hooks, Context API"
            />

            <HabilidadeCard
                id="Postg"
                className="btn2b"
                Icon={BiLogoPostgresql}
                nome="PostgreSQL"
            />

            <HabilidadeCard
                id="Flutter"
                className="btn2"
                Icon={SiFlutter}
                nome="Flutter"
            />

            <HabilidadeCard
                id="HTML"
                className="btn2"
                Icon={FaHtml5}
                nome="HTML"
            />

            <HabilidadeCard
                id="CSS"
                className="btn2"
                Icon={FaCss3Alt}
                nome="CSS"
            />

            <HabilidadeCard
                id="JS"
                className="btn2"
                Icon={FaJs}
                nome="JavaScript"
            />

            <HabilidadeCard
                id="Oracle"
                className="btn2b"
                Icon={SiOracle}
                nome="Oracle DB"
            />

            <HabilidadeCard
                id="Git"
                className="btn2b"
                Icon={FaGitAlt}
                nome="Git/GitHub"
            />

            <HabilidadeCard
                id="Docker"
                className="btn2b"
                Icon={FaDocker}
                nome="Docker"
            />

            <HabilidadeCard
                id="API"
                className="btn2b"
                Icon={TbHttpGet}
                nome="API REST"
            />

            <HabilidadeCard
                id="Axios"
                className="btn2b"
                Icon={SiAxios}
                nome="Axios"
            />

            <HabilidadeCard
                id="Sass"
                className="btn2"
                Icon={FaSass}
                nome="SCSS"
            />

            <HabilidadeCard
                id="Node"
                className="btn2b"
                Icon={FaNodeJs}
                nome="Node.js"
            />

            <HabilidadeCard
                id="Bootstrap"
                className="btn2"
                Icon={FaBootstrap}
                nome="Bootstrap"
            />

            <HabilidadeCard
                id="C#"
                className="btn2b"
                Icon={SiCsharp}
                nome="C#"
            />

            <HabilidadeCard
                id="ASP"
                className="btn2b"
                Icon={SiDotnet}
                nome="ASP.NET"
            />

            <HabilidadeCard
                id="TS"
                className="btn2"
                Icon={SiTypescript}
                nome="TypeScript"
            />

            <HabilidadeCard
                id="Cpp"
                className="btn2b"
                Icon={PiFileCppFill}
                nome="C++"
            />

            <HabilidadeCard
                id="Python"
                className="btn2b"
                Icon={FaPython}
                nome="Python"
            />

            <HabilidadeCard
                id="SqlSrv"
                className="btn2b"
                Icon={SiMicrosoftsqlserver}
                nome="SQL Server"
            />

            <HabilidadeCard
                id="Figma"
                className="btn2o"
                Icon={FaFigma}
                nome="Figma"
            />

            <HabilidadeCard
                id="Vscode"
                className="btn2o"
                Icon={VscVscode}
                nome="VsCode"
            />

            <HabilidadeCard
                id="React"
                className="btn2"
                Icon={FaReact}
                nome="React"
                title="React Router, React Hooks, Context API"
            />
        </div>
    );
};

export default Habilidades;
