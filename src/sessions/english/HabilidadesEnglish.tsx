import "../../assets/styles/habilidades-projetos.scss";
import Habilidades from "../../components/Tecnologias";
import Habilidades2 from "../../components/Tecnologias2";
import AnotherSkills from "../../components/AnotherSkills";

const ExperienciaEnglish = () => {
    return (
        <div className="experiencia" id="skills">
            <h2 className="tituloxp">
                &#123;rickreisme&#47;<span>skills</span>&#125;
            </h2>

            <Habilidades /> <br />

            <Habilidades2 />

            <h3 className="diferenciais-titulo">Another skills </h3>

            <AnotherSkills />
        </div>
    );
};

export default ExperienciaEnglish;
