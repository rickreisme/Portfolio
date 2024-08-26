import "../../assets/styles/habilidades-projetos.scss";
import { FaPaintBrush } from "react-icons/fa";
import { LuLayout } from "react-icons/lu";
import Habilidades from "../../components/Tecnologias";
import Habilidades2 from "../../components/Tecnologias2";

const ExperienciaEnglish = () => {
    return (
        <div className="experiencia" id="skills">
            <h2 className="tituloxp">
                &#123;rickreisme&#47;<span>skills</span>&#125;
            </h2>

            <h3>Technologies I mostly use</h3>

            <Habilidades />

            <h3>I also know</h3>

            <Habilidades2 />

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
