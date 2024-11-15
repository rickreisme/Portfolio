import "../assets/styles/habilidades-projetos.scss";

import Tecnologias from "../components/Tecnologias";
import Tecnologias2 from "../components/Tecnologias2";
import OutrasHabilidades from "../components/OutrasHabilidades";

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
            <OutrasHabilidades />
        </div>
    );
};

export default Experiencia;
