import "../assets/styles/habilidades-projetos.scss";
import HabilidadeCard from "./HabilidadeCard";
import {
    FaDocker,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaSass,
    FaNodeJs,
    FaBootstrap,
} from "react-icons/fa";
import { SiTypescript, SiAxios } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbHttpGet } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { TbBrandVite } from "react-icons/tb";
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
                id="Vite"
                className="btn2"
                Icon={TbBrandVite}
                nome="Vite"
                title="Vite"
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
                className="btn2"
                Icon={TbHttpGet}
                nome="RESTful API"
            />

            <HabilidadeCard
                id="Node"
                className="btn2"
                Icon={FaNodeJs}
                nome="Node.js"
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
                id="Axios"
                className="btn2b"
                Icon={SiAxios}
                nome="Axios"
            />

            <HabilidadeCard
                id="MatUI"
                className="btn2"
                iconUrl={MaterialUI}
                nome="MaterialUI"
            />

            <HabilidadeCard
                id="Postg"
                className="btn2"
                Icon={BiLogoPostgresql}
                nome="PostgreSQL"
            />

            <HabilidadeCard
                id="Git"
                className="btn2"
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
                id="Vscode"
                className="btn2"
                Icon={VscVscode}
                nome="VsCode"
            />
        </div>
    );
};

export default Tecnologias;
