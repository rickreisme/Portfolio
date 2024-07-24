import "../../assets/styles/experiencia-projetos.scss";
import BoxProjeto from "../../components/BoxProjeto";

const ProjetosEnglish = () => {
    return (
        <div className="meus-projetos" id="meus-projetos">
            <h2 id="projeto-titulo">
                &#123;rickreisme&#47;<span>projects</span>&#125;
            </h2>

            <h3>Highlights</h3>

            <div className="destaque-projetos">
                <BoxProjeto
                    titulo="Service Portal"
                    descricao="A modular web system that manages and provides services
for a public college."
                    linkRepo="https://github.com/rickreisme/PortalServicos"
                    tecnologias="Vite React - Auth0 - REST API - SASS - Express"
                />

                <BoxProjeto
                    titulo="Payment Page"
                    descricao="Payment page with form validation and mobile-fist design."
                    linkSite="https://desafio-front-end-woovi.vercel.app"
                    linkRepo="https://github.com/rickreisme/DesafioFrontEndWoovi"
                    tecnologias="Vite React - MUI - CSS in TS - Typescript - Figma -
            Vitest"
                />

                <BoxProjeto
                    titulo="Password Manager"
                    descricao="A web application that allows the registration, generation,
and management of passwords, notes, and favorites."
                    linkRepo="https://github.com/rickreisme/GerenciadorSenhas"
                    tecnologias="Vite React - Python - SASS - Javascript - Docker -
PostgreSQL"
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
                    titulo="E++"
                    descricao="An Android app designed to help with programming learning
using gamification."
                    linkRepo="https://github.com/rickreisme/Epp"
                    tecnologias="Flutter - Firebase - Figma"
                />

                <BoxProjeto
                    titulo="JapaCasa!"
                    descricao="Revamped version of the website for the fictional
Japanese food delivery restaurant JapaCasa."
                    linkRepo="https://github.com/rickreisme/JapaCasa3"
                    tecnologias="Vite React - SASS - REST API"
                />

                <BoxProjeto
                    titulo="SpotifyClone"
                    descricao="Recreation of the Spotify Web landing page. Queries an
API, searching for artists typed in the search bar."
                    linkSite="https://rickreisme.github.io/SpotifyClone/"
                    linkRepo="https://github.com/rickreisme/SpotifyClone"
                    tecnologias="HTML - CSS - Javascript - Node.js - Json-Server"
                />

                <BoxProjeto
                    titulo="JapaCasa! Products API"
                    descricao="An API made to serve the products to be displayed on the
'JapaCasa!' website."
                    linkRepo="https://github.com/rickreisme/JapaCasaBack-End"
                    tecnologias="Node.js - Javascript - Express"
                />

                <BoxProjeto
                    titulo="SpotifyClone Artists API"
                    descricao="An API made to be consumed in my SpotifyClone project."
                    linkRepo="https://github.com/rickreisme/api-artists"
                    tecnologias="Node.js - Javascript - Json-Server"
                />

                <BoxProjeto
                    titulo="Task List"
                    descricao="Web page that presents a task list allowing the addition
of tasks and marking them as completed."
                    linkSite="https://lista-de-tarefas-zeta-ivory.vercel.app"
                    linkRepo="https://github.com/rickreisme/ListaDeTarefas"
                    tecnologias="HTML - CSS - Javascript"
                />

                <BoxProjeto
                    titulo="Fatec Clone"
                    descricao="A clone and redesign of the website of the Technology
College of Ribeirão Preto."
                    linkRepo="https://github.com/rickreisme/FatecClone"
                    tecnologias="HTML - CSS - Javascript"
                />

                <BoxProjeto
                    titulo="BMI Calculator"
                    descricao="Website that calculates the body mass index and returns
the weight range in which it is located."
                    linkSite="https://rickreisme.github.io/CalculaIMC/"
                    linkRepo="https://github.com/rickreisme/CalculaIMC"
                    tecnologias="HTML - CSS - Javascript"
                />

                <BoxProjeto
                    titulo="LoginForm DarkLight"
                    descricao="Generic page with a login form with an option for dark
mode theme."
                    linkSite="https://rickreisme.github.io/LoginFormDarkLight/"
                    linkRepo="https://github.com/rickreisme/LoginFormDarkLight"
                    tecnologias="HTML - CSS - Javascript"
                />

                <BoxProjeto
                    titulo="Vending Machine"
                    descricao="Simulator of the functioning of a vending machine in the
C++ terminal environment."
                    linkRepo="https://github.com/rickreisme/VendingMachine"
                    tecnologias="C++"
                />

                <BoxProjeto
                    titulo="Dog Life"
                    descricao="Three screens of a fictional app that works as a social
network for dog owners."
                    linkRepo="https://github.com/rickreisme/DogLife"
                    tecnologias="Flutter - Dart"
                />

                <BoxProjeto
                    titulo="Landing page with carousel"
                    descricao="A landing page for a generic company that displays
photos in a carousel and some information."
                    tecnologias="Vite React - HTML - CSS - Javascript"
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
