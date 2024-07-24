import "../assets/styles/experiencia-projetos.scss";
import BoxProjeto from "../components/BoxProjeto";

const Projetos = () => {
    return (
        <div className="meus-projetos" id="meus-projetos">
            <h2 id="projeto-titulo">
                &#123;rickreisme&#47;<span>projetos</span>&#125;
            </h2>

            <h3>Em destaque</h3>

            <div className="destaque-projetos">
                <BoxProjeto
                    titulo="Portal de Serviços"
                    descricao="Um sistema web modular que gerencia e disponibiliza
            serviços de uma faculdade pública."
                    linkRepo="https://github.com/rickreisme/PortalServicos"
                    tecnologias="Vite React - Auth0 - API REST - SASS - Express"
                />

                <BoxProjeto
                    titulo="Página de Pagamento"
                    descricao="Página de pagamento com validações de formulário e design mobile-fist."
                    linkSite="https://desafio-front-end-woovi.vercel.app"
                    linkRepo="https://github.com/rickreisme/DesafioFrontEndWoovi"
                    tecnologias="Vite React - MUI - CSS in TS - Typescript - Figma -
            Vitest"
                />

                <BoxProjeto
                    titulo="Gerenciador de Senhas"
                    descricao="Uma aplicação web que permite o cadastro, geração e
            o gerenciamento de senhas, notas e favoritos."
                    linkRepo="https://github.com/rickreisme/GerenciadorSenhas"
                    tecnologias="Vite React - Python - SASS - Javascript - Docker -
            PostgreSQL"
                />
            </div>

            <h3>Todos os projetos</h3>

            <div className="projetos" id="projetos">
                <BoxProjeto
                    titulo="ContactMVC"
                    descricao="Aplicação web que implementa operações CRUD em um
                            sistema de contatos ligado com um banco de dados em
                            Docker."
                    linkRepo="https://github.com/rickreisme/ContactMVC"
                    tecnologias="ASP.NET - HTML - CSS - Javascript - Docker -
                            PostgreSQL"
                />

                <BoxProjeto
                    titulo="E++"
                    descricao="Um app Android feito para ajudar no aprendizado de
            programação utilizando a gamificação."
                    linkRepo="https://github.com/rickreisme/Epp"
                    tecnologias="Flutter - Firebase - Figma"
                />

                <BoxProjeto
                    titulo="JapaCasa!"
                    descricao="Versão reformulada do site do restaurante fictício
                            de delivery de comida japonesa JapaCasa."
                    linkRepo="https://github.com/rickreisme/JapaCasa"
                    tecnologias="Vite React - SASS - API REST"
                />

                <BoxProjeto
                    titulo="SpotifyClone"
                    descricao=" Recriação da landing page do Spotify Web. Faz uma
                            consulta em uma api, buscando os artistas digitados
                            na barra de pesquisa."
                    linkSite="https://rickreisme.github.io/SpotifyClone/"
                    linkRepo="https://github.com/rickreisme/SpotifyClone"
                    tecnologias="HTML - CSS - Javascript - Node.js - Json-Server"
                />

                <BoxProjeto
                    titulo="API de produtos JapaCasa!"
                    descricao="Uma API feita para servir os produtos que são renderizados nos cards
                            do site do 'JapaCasa!'."
                    linkRepo="https://github.com/rickreisme/JapaCasaBack-End"
                    tecnologias="Node.js - Javascript - Express"
                />

                <BoxProjeto
                    titulo="API de artistas SpotifyClone"
                    descricao="Uma API feita para ser consumida no meu projeto
                            SpotifyClone."
                    linkRepo="https://github.com/rickreisme/api-artists"
                    tecnologias="Node.js - Javascript - Json-Server"
                />

                <BoxProjeto
                    titulo="Lista de Tarefas"
                    descricao="Página da web que apresenta uma lista de tarefas que
                            permite adicionar tasks e marcá-las como concluídas."
                    linkSite="https://lista-de-tarefas-zeta-ivory.vercel.app"
                    linkRepo="https://github.com/rickreisme/ListaDeTarefas"
                    tecnologias="HTML - CSS - Javascript"
                />

                <BoxProjeto
                    titulo="Fatec Clone"
                    descricao="Um clone e redesign da página web da Faculdade de
                            Tecnologia de Ribeirão Preto."
                    linkRepo="https://github.com/rickreisme/FatecClone"
                    tecnologias="HTML - CSS - Javascript"
                />

                <BoxProjeto
                    titulo="Calcula IMC"
                    descricao="Site que calcula o índica de massa corporal e
                            retorna a faixa de peso no qual o mesmo se encontra."
                    linkSite="https://rickreisme.github.io/CalculaIMC/"
                    linkRepo="https://github.com/rickreisme/CalculaIMC"
                    tecnologias="HTML - CSS - Javascript"
                />

                <BoxProjeto
                    titulo="LoginForm DarkLight"
                    descricao="Página genérica com formulário de login com opção de
                            tema no modo escuro."
                    linkSite="https://rickreisme.github.io/LoginFormDarkLight/"
                    linkRepo="https://github.com/rickreisme/LoginFormDarkLight"
                    tecnologias="HTML - CSS - Javascript"
                />

                <BoxProjeto
                    titulo="Vending Machine"
                    descricao="Simulador do funcionamento de uma máquina automática
                            de alimentos no ambiente do terminal do C++."
                    linkRepo="https://github.com/rickreisme/VendingMachine"
                    tecnologias="C++"
                />

                <BoxProjeto
                    titulo="Dog Life"
                    descricao="Três telas de um app fictício que funciona como uma
                            rede social para donos de cachorros."
                    linkRepo="https://github.com/rickreisme/DogLife"
                    tecnologias="Flutter - Dart"
                />

                <BoxProjeto
                    titulo="Landing page com carrossel"
                    descricao="Uma landing page de uma empresa genérica que exibe
                            fotos em carrossel e algumas informações."
                    tecnologias="Vite React - HTML - CSS - Javascript"
                />
            </div>

            <a
                className="btn5"
                href="https://github.com/rickreisme?tab=repositories"
                target="_blank"
                rel="noreferrer"
                title="Ver todos os repositórios no GitHub"
            >
                <h2>Ver no GitHub</h2>
            </a>
        </div>
    );
};

export default Projetos;
