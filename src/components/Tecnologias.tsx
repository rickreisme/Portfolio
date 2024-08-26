import "../assets/styles/habilidades-projetos.scss";
import HabilidadeCard from "./HabilidadeCard";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaSass,
    FaNodeJs,
    FaBootstrap,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbHttpGet } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import MaterialUI from "../assets/imagens/materialUI.svg";

const Tecnologias = () => {
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
                id="TS"
                className="btn2"
                Icon={SiTypescript}
                nome="TypeScript"
            />

            <HabilidadeCard
                id="API"
                className="btn2b"
                Icon={TbHttpGet}
                nome="RESTful API"
            />

            <HabilidadeCard
                id="Sass"
                className="btn2"
                Icon={FaSass}
                nome="SCSS"
            />

            <HabilidadeCard
                id="Bootstrap"
                className="btn2"
                Icon={FaBootstrap}
                nome="Bootstrap"
            />

            <HabilidadeCard
                id="Node"
                className="btn2b"
                Icon={FaNodeJs}
                nome="Node.js"
            />

            <HabilidadeCard
                id="MatUI"
                className="btn2"
                iconUrl={MaterialUI}
                nome="MaterialUI"
            />

            <HabilidadeCard
                id="Postg"
                className="btn2b"
                Icon={BiLogoPostgresql}
                nome="PostgreSQL"
            />

            <HabilidadeCard
                id="Git"
                className="btn2b"
                Icon={FaGitAlt}
                nome="Git/GitHub"
            />

            <HabilidadeCard
                id="Vscode"
                className="btn2o"
                Icon={VscVscode}
                nome="VsCode"
            />
        </div>
    );
};

export default Tecnologias;
