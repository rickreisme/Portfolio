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

            <h3>Tecnologias que eu mais uso</h3>

            <Tecnologias />

            <h3>Também conheço</h3>

            <Tecnologias2 />

            <h3 className="diferenciais-titulo">Outras habilidades</h3>

            <div className="diferenciais">
                <div className="card">
                    <div className="card-titulo">
                        <h3>Noções de design</h3>
                    </div>

                    <div className="card-body">
                        <FaPaintBrush className="card-icon" />
                        <p>
                            Gosto muito de design e, ao longo dos anos, por meio
                            de cursos, prática e trabalhos freelances, adquiri
                            um conhecimento que me permite mostrar isso nos meus
                            projetos.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-titulo">
                        <h3>Noções de UI/UX</h3>
                    </div>

                    <div className="card-body">
                        <LuLayout className="card-icon" />
                        <p>
                            Sempre me interessei por interfaces e experiências
                            do usuário, e traduzo o meu conhecimento adquirido
                            no assunto em designs atrativos e funcionais.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiencia;
