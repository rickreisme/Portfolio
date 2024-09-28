import "../assets/styles/habilidades-projetos.scss";
import { FaPaintBrush } from "react-icons/fa";
import { LuLayout } from "react-icons/lu";
import Tecnologias from "../components/Tecnologias";
import Tecnologias2 from "../components/Tecnologias2";

const Experiencia = () => {
    return (
        <div className="experiencia" id="habilidades">
            <h2 className="tituloxp">
                &#123;rickreisme&#47;<span>habilidades</span>&#125;
            </h2>
            <Tecnologias /> <br />
            <Tecnologias2 />
            <h3 className="diferenciais-titulo">
                Outras habilidades
            </h3>
            <div className="diferenciais">
                <div className="card">
                    <div className="card-body">
                        <FaPaintBrush className="card-icon" />

                        <div className="card-titulo">
                            <h3>Noções de design</h3>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <LuLayout className="card-icon" />

                        <div className="card-titulo">
                            <h3>Noções de UI/UX</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiencia;
