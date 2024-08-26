import "../assets/styles/habilidades-projetos.scss";
import HabilidadeCard from "./HabilidadeCard";
import { FaDocker, FaPython, FaFigma } from "react-icons/fa";
import {
    SiFlutter,
    SiOracle,
    SiMicrosoftsqlserver,
    SiCsharp,
    SiAxios,
    SiDotnet,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { PiFileCppFill } from "react-icons/pi";

const Tecnologias2 = () => {
    return (
        <div className="habilidades">
            <HabilidadeCard
                id="Figma"
                className="btn2o"
                Icon={FaFigma}
                nome="Figma"
            />

            <HabilidadeCard
                id="Docker"
                className="btn2b"
                Icon={FaDocker}
                nome="Docker"
            />

            <HabilidadeCard
                id="Flutter"
                className="btn2"
                Icon={SiFlutter}
                nome="Flutter"
            />

<HabilidadeCard
                id="Firebase"
                className="btn2"
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
                id="Axios"
                className="btn2b"
                Icon={SiAxios}
                nome="Axios"
            />

            <HabilidadeCard
                id="SqlSrv"
                className="btn2b"
                Icon={SiMicrosoftsqlserver}
                nome="SQL Server"
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
                id="Cpp"
                className="btn2b"
                Icon={PiFileCppFill}
                nome="C++"
            />
        </div>
    );
};

export default Tecnologias2;
