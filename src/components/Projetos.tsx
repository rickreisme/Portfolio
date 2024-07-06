import "../assets/styles/experiencia-projetos.scss"

const Projetos = () => {
    return (
        <div className='meus-projetos' id='meus-projetos'>
            <h2 id="projeto-titulo">&#123;rickreisme&#47;<span>projetos</span>&#125;</h2>

            <div className="destaques">
                <h3>Destaques</h3>

                <div className="destaque-projetos">
                    <a className="link-projeto">
                        <div className='box-projeto'>
                            <h2 className="nome-projeto">Portal de Serviços</h2>

                            <p>
                                Um sistema web modular que gerencia e disponibiliza serviços de uma faculdade pública.
                            </p>

                            <h4>Vite React - Auth0 - API REST - SASS - Express</h4>
                        </div>
                    </a>

                    <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/GerenciadorSenhas">
                        <div className='box-projeto'>
                            <h2 className="nome-projeto">Gerenciador de Senhas</h2>

                            <p>
                                Uma aplicação web que permite o cadastro, geração e o gerenciamento de senhas, notas e favoritos.
                            </p>

                            <h4>Vite React - Python - SASS - Javascript - Docker - PostgreSQL</h4>
                        </div>
                    </a>

                    <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/Epp">
                        <div className='box-projeto'>
                            <h2 className="nome-projeto">E++</h2>

                            <p>
                                Um app Android feito para ajudar no aprendizado de programação utilizando a gamificação.
                            </p>

                            <h4>Flutter - Firebase - Figma</h4>
                        </div>
                    </a>
                </div>
            </div>

            <h3>Todos os projetos</h3>

            <div className='projetos' id='projetos'>
                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/ContactMVC">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">ContactMVC</h2>

                        <p>
                            Aplicação web que implementa operações CRUD em um sistema de contatos ligado com um banco de dados em
                            Docker.
                        </p>

                        <h4>ASP.NET - HTML - CSS - Javascript - Docker - PostgreSQL</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/SpotifyClone">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">Spotify Clone</h2>

                        <p>
                            Recriação da landing page do Spotify Web. Faz uma consulta em uma api, buscando os artistas
                            digitados na barra de pesquisa.
                        </p>

                        <h4>HTML - CSS - Javascript - Node.js - Json-Server</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/JapaCasa3">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">JapaCasa!</h2>

                        <p>
                            Versão reformulada do site do restaurante fictício de delivery de comida japonesa JapaCasa.
                        </p>

                        <h4>Vite React - SASS - API REST</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/api-produtos-jpc">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">API de comidas JapaCasa</h2>

                        <p>
                            Uma API feita para prover os produtos para serem visualizados no site do JapaCasa.
                        </p>

                        <h4>Node.js - Javascript - Json-Server</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/api-artists">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">API de artistas SpotifyClone</h2>

                        <p>
                            Uma API feita para ser consumida no meu projeto Spotify Clone.
                        </p>

                        <h4>Node.js - Javascript - Json-Server</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/ListaDeTarefas">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">Lista de Tarefas</h2>

                        <p>
                            Página da web que apresenta uma lista de tarefas que permite adicionar tasks e marcá-las como concluídas.
                        </p>

                        <h4>HTML - CSS - Javascript</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/FatecClone">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">Fatec Clone</h2>

                        <p>
                            Um clone e redesign da página web da Faculdade de Tecnologia de Ribeirão Preto.
                        </p>

                        <h4>HTML - CSS - Javascript</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/CalculaIMC">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">Calcula IMC</h2>

                        <p>
                            Site que calcula o índica de massa corporal e retorna a faixa de peso no qual o mesmo se encontra.
                        </p>

                        <h4>HTML - CSS - Javascript</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/LoginFormDarkLight">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">LoginForm DarkLight</h2>

                        <p>
                            Página genérica com formulário de login com opção de tema no modo escuro.
                        </p>

                        <h4>HTML - CSS - Javascript</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/WeForm">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">WeForm</h2>

                        <p>
                            Uma landing page de cadastro feita como exercício final da Trilha Front-End ADA do Santander Coders.
                        </p>

                        <h4>HTML - CSS</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/QRCodePage">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">QR Code Page</h2>

                        <p>
                            Uma página genérica que exibe um QR code, feita como solução do desafio do Frontend Mentor.
                        </p>

                        <h4>HTML - CSS</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/DynamicRelogio">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">Dynamic Relógio</h2>

                        <p>
                            Um relógio digital em tempo real, que muda as cores de fundo e os textos de acordo com o dia e horário.
                        </p>

                        <h4>HTML - CSS - Javascript</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/AnalisaNumero">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">Analisa Número</h2>

                        <p>
                            Site que gera informações sobre uma lista de números feita com as entradas do usuário e mostra na tela.
                        </p>

                        <h4>HTML - CSS - Javascript</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/TabuadaGenerator">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">Tabuada Generator</h2>

                        <p>
                            Um site simples que gera uma tabuada e mostra na tela de acordo com o número que o usuário escolheu.
                        </p>

                        <h4>HTML - CSS - Javascript</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/SuperContador">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">Super Contador</h2>

                        <p>
                            Site que mostra a contagem de um número até outro, de acordo com um terceiro número que determina os passos.
                        </p>

                        <h4>HTML - CSS - Javascript</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/VerificadorIdade">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">Verificador de Idade</h2>

                        <p>
                            Site que mostra a idade e a imagem de uma pessoa de acordo com o ano de nascimento e sexo.
                        </p>

                        <h4>HTML - CSS - Javascript</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/HoraDoDia">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">Hora do Dia</h2>

                        <p>
                            Site que mostra a hora e altera a cor do background e a imagem mostrada de acordo com o período do dia.
                        </p>

                        <h4>HTML - CSS - Javascript</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/VendingMachine">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">Vending Machine</h2>

                        <p>
                            Simulador do funcionamento de uma máquina automática de alimentos no ambiente do terminal do C++.
                        </p>

                        <h4>C++</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/StartupNamer">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">Dog Life</h2>

                        <p>
                            Três telas de um app fictício que funciona como uma rede social para donos de cachorros.
                        </p>

                        <h4>Flutter - Dart</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/StartupNamer">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">Startup Namer</h2>

                        <p>
                            Um aplicativo que gera uma lista infinita de nomes aleatórios para startups em inglês.
                        </p>

                        <h4>Flutter - Dart</h4>
                    </div>
                </a>

                <a className="link-projeto">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">Landing page com carrossel</h2>

                        <p>
                            Uma landing page de uma empresa genérica que exibe fotos em carrossel e algumas informações.
                        </p>

                        <h4>Vite React - HTML - CSS - Javascript</h4>
                    </div>
                </a>
            </div>

            <a className='btn5' href='https://github.com/rickreisme?tab=repositories' target='_blank' rel="noreferrer">
                <h2>Ir para o GitHub</h2>
            </a>
        </div>
    )
}

export default Projetos
