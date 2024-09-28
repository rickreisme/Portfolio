import "../assets/styles/habilidades-projetos.scss";
import BoxProjeto from "../components/BoxProjeto";
import japacasa from "../assets/imagens/japacasa.png";
import crudEstudantes from "../assets/imagens/crudEstudantes.png";
import portalServicos from "../assets/imagens/portalservicos.png";
import epp from "../assets/imagens/epp.png";
import pagamento from "../assets/imagens/pagamento.png";
import gerSenhas from "../assets/imagens/senha.png";
import tarefas from "../assets/imagens/tarefas.png";
import imc from "../assets/imagens/imc.png";

const Projetos = () => {
    return (
        <div className="meus-projetos" id="meus-projetos">
            <h2 id="projeto-titulo">
                &#123;rickreisme&#47;<span>projetos</span>&#125;
            </h2>

            <h3>Em destaque</h3>

            <div className="destaque-projetos">
                <BoxProjeto
                    imagem={japacasa}
                    titulo="JapaCasa!"
                    descricao="Um site de delivery para um restaurante de comida japonesa, 
                    onde o usuário pode conferir o cardápio e adicionar produtos no carrinho."
                    linkRepo="https://github.com/rickreisme/JapaCasa"
                    linkSite="https://japacasa.vercel.app"
                    tecnologias="Vite React - Bootstrap - SASS - API REST - Node.js - Express"
                />

                <BoxProjeto
                    imagem={crudEstudantes}
                    titulo="CRUD Estudantes"
                    descricao="Um sistema simples que permite adicionar, listar, editar e deletar informações de estudantes."
                    linkRepo="https://github.com/rickreisme/CrudEstudantes"
                    linkSite="https://crudestudantes.onrender.com"
                    tecnologias="Vue.js - Node.js - Express - API REST - Bootstrap - Docker -
PostgreSQL"
                />

                <BoxProjeto
                    imagem={portalServicos}
                    titulo="Portal de Serviços"
                    descricao="Um sistema web modular que gerencia e disponibiliza
            serviços de uma faculdade pública."
                    linkRepo="https://github.com/rickreisme/PortalServicos"
                    tecnologias="Vite React - Auth0 - API REST - SASS - Express"
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
                    imagem={epp}
                    titulo="E++"
                    descricao="Um app Android feito para ajudar no aprendizado de
            programação utilizando a gamificação."
                    linkRepo="https://github.com/rickreisme/Epp"
                    tecnologias="Flutter - Firebase - Figma"
                />

                <BoxProjeto
                    imagem={pagamento}
                    titulo="Página de Pagamento"
                    descricao="Página de pagamento com validações de formulário e design mobile-fist."
                    linkSite="https://desafio-front-end-woovi.vercel.app"
                    linkRepo="https://github.com/rickreisme/DesafioFrontEndWoovi"
                    tecnologias="Vite React - MUI - CSS in TS - Typescript - Figma -
            Vitest"
                />

                <BoxProjeto
                    imagem={gerSenhas}
                    titulo="Gerenciador de Senhas"
                    descricao="Uma aplicação web que permite o cadastro, geração e
            o gerenciamento de senhas, notas e favoritos."
                    linkRepo="https://github.com/rickreisme/GerenciadorSenhas"
                    tecnologias="Vite React - Python - SASS - Javascript - Docker -
            PostgreSQL"
                />

                <BoxProjeto
                    imagem={tarefas}
                    titulo="Lista de Tarefas"
                    descricao="Página que apresenta uma lista de tarefas que
                            permite adicionar tasks e marcá-las como concluídas."
                    linkSite="https://lista-de-tarefas-zeta-ivory.vercel.app"
                    linkRepo="https://github.com/rickreisme/ListaDeTarefas"
                    tecnologias="HTML - CSS - Javascript"
                />

                <BoxProjeto
                    imagem={imc}
                    titulo="Calcula IMC"
                    descricao="Site que calcula o índica de massa corporal e
                            retorna a faixa de peso no qual o mesmo se encontra."
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
                title="Ver todos os repositórios no GitHub"
            >
                <h2>Ver no GitHub</h2>
            </a>
        </div>
    );
};

export default Projetos;
