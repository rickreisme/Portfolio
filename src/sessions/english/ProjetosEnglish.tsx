import "../../assets/styles/habilidades-projetos.scss";
import BoxProjeto from "../../components/BoxProjeto";
import japacasa from "../../assets/imagens/japacasa.png";
import crudEstudantes from "../../assets/imagens/crudEstudantes.png";
import portalServicos from "../../assets/imagens/portalservicos.png";
import epp from "../../assets/imagens/epp.png";
import pagamento from "../../assets/imagens/pagamento.png";
import gerSenhas from "../../assets/imagens/senha.png";
import tarefas from "../../assets/imagens/tarefas.png";
import imc from "../../assets/imagens/imc.png";

const ProjetosEnglish = () => {
    return (
        <div className="meus-projetos" id="meus-projetos">
            <h2 id="projeto-titulo">
                &#123;rickreisme&#47;<span>projects</span>&#125;
            </h2>

            <h3>Highlights</h3>

            <div className="destaque-projetos">
                <BoxProjeto
                    imagem={japacasa}
                    titulo="JapaCasa!"
                    descricao="Website for the fictional
Japanese food delivery restaurant called 'JapaCasa!'."
                    linkRepo="https://github.com/rickreisme/JapaCasa"
                    linkSite="https://japacasa.vercel.app"
                    tecnologias="Vite React - Bootstrap - SASS - REST API - Node.js - Express"
                />

                <BoxProjeto
                    imagem={crudEstudantes}
                    titulo="Students CRUD"
                    descricao="A simple system that allows the user to add, list, edit and delete student information."
                    linkRepo="https://github.com/rickreisme/CrudEstudantes"
                    linkSite="https://crudestudantes.onrender.com"
                    tecnologias="Vue.js - Node.js - Express - REST API - Bootstrap - Docker -
PostgreSQL"
                />

                <BoxProjeto
                    imagem={portalServicos}
                    titulo="Service Portal"
                    descricao="A modular web system that manages and provides services
for a public college."
                    linkRepo="https://github.com/rickreisme/PortalServicos"
                    tecnologias="Vite React - Auth0 - REST API - SASS - Express"
                />
            </div>

            <h3>All projects</h3>

            <div className="projetos" id="projetos">
                <BoxProjeto
                    titulo="ContactMVC"
                    descricao="Web application that implements CRUD operations in a
contact system connected with a database in Docker."
                    linkRepo="https://github.com/rickreisme/ContactMVC"
                    tecnologias="ASP.NET - HTML - CSS - Javascript - Docker -
PostgreSQL"
                />

                <BoxProjeto
                    imagem={epp}
                    titulo="E++"
                    descricao="An Android app designed to help with programming learning
using gamification."
                    linkRepo="https://github.com/rickreisme/Epp"
                    tecnologias="Flutter - Firebase - Figma"
                />

                <BoxProjeto
                    imagem={pagamento}
                    titulo="Payment Page"
                    descricao="Payment page with form validation and mobile-fist design."
                    linkSite="https://desafio-front-end-woovi.vercel.app"
                    linkRepo="https://github.com/rickreisme/DesafioFrontEndWoovi"
                    tecnologias="Vite React - MUI - CSS in TS - Typescript - Figma -
            Vitest"
                />

                <BoxProjeto
                    imagem={gerSenhas}
                    titulo="Password Manager"
                    descricao="A web application that allows the registration, generation,
and management of passwords, notes, and favorites."
                    linkRepo="https://github.com/rickreisme/GerenciadorSenhas"
                    tecnologias="Vite React - Python - SASS - Javascript - Docker -
PostgreSQL"
                />

                <BoxProjeto
                    imagem={tarefas}
                    titulo="Task List"
                    descricao="Web page that presents a task list allowing the addition
of tasks and marking them as completed."
                    linkSite="https://lista-de-tarefas-zeta-ivory.vercel.app"
                    linkRepo="https://github.com/rickreisme/ListaDeTarefas"
                    tecnologias="HTML - CSS - Javascript"
                />

                <BoxProjeto
                    imagem={imc}
                    titulo="BMI Calculator"
                    descricao="Website that calculates the body mass index and returns
the weight range in which it is located."
                    linkSite="https://rickreisme.github.io/CalculaIMC/"
                    linkRepo="https://github.com/rickreisme/CalculaIMC"
                    tecnologias="HTML - CSS - Javascript"
                />
            </div>

            <a
                className="btn5"
                href="https://github.com/rickreisme?tab=repositories"
                target="_blank"
                rel="noreferrer"
                title="See al projects on GitHub"
            >
                <h2>See on GitHub</h2>
            </a>
        </div>
    );
};

export default ProjetosEnglish;
