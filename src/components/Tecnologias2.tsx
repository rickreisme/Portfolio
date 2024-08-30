import "../assets/styles/habilidades-projetos.scss";
import HabilidadeCard from "./HabilidadeCard";
import { FaPython, FaFigma, FaVuejs } from "react-icons/fa";
import {
    SiFlutter,
    SiOracle,
    SiMicrosoftsqlserver,
    SiCsharp,
    SiDotnet,
    SiCplusplus,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const Tecnologias2 = () => {
    return (
        <div className="habilidades">
            <HabilidadeCard
                id="Figma"
                className="btn2b"
                Icon={FaFigma}
                nome="Figma"
            />

            <HabilidadeCard
                id="Flutter"
                className="btn2b"
                Icon={SiFlutter}
                nome="Flutter"
            />

            <HabilidadeCard
                id="Firebase"
                className="btn2b"
                Icon={IoLogoFirebase}
                nome="Firebase"
            />

            <HabilidadeCard
                id="Python"
                className="btn2b"
                Icon={FaPython}
                nome="Python"
            />

            <HabilidadeCard
                id="Oracle"
                className="btn2b"
                Icon={SiOracle}
                nome="Oracle DB"
            />

            <HabilidadeCard
                id="Cpp"
                className="btn2b"
                Icon={SiCplusplus}
                nome="C++"
            />

            <HabilidadeCard
                id="SqlSrv"
                className="btn2b"
                Icon={SiMicrosoftsqlserver}
                nome="SQL Server"
            />

            <HabilidadeCard
                id="ue.js"
                className="btn2b"
                Icon={FaVuejs}
                nome="Vue.js"
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
        </div>
    );
};

export default Tecnologias2;
