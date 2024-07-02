import "../assets/styles/experiencia-projetos.scss"

const Projetos = () => {
    return (
        <div className='meus-projetos' id='meus-projetos'>
            <h2 id="projeto-titulo">&#123;rickreisme&#47;<span>projetos</span>&#125;</h2>
            <h3>Confira aqui os meus projetos mais recentes</h3>

            <div className='projetos' id='projetos'>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/GerenciadorSenhas">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">GerenciadorSenhas</h2>

                        <p>
                            Uma aplicação web que permite o cadastro, geração e o gerenciamento de senhas, notas e favoritos.
                        </p>

                        <h4>Vite React - Python - SASS - Javascript - Docker - PostgreSQL</h4>
                    </div>
                </a>

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/ContactMVC">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">ContactMVC</h2>

                        <p>
                            Uma aplicação web que implementa operações CRUD em um sistema de contatos ligado com um banco de dados em
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

                <a className="link-projeto" target='_blank' href="https://github.com/rickreisme/SpotifyClone">
                    <div className='box-projeto'>
                        <h2 className="nome-projeto">JapaCasa!</h2>

                        <p>
                            Versão reformulada do site do restaurante fictício de delivery de comida japonesa JapaCasa.
                        </p>

                        <h4>HTML - CSS - Javascript - Node.js - Json-Server</h4>
                    </div>
                </a>

            </div>

            <a className='btn5' href='https://github.com/rickreisme?tab=repositories' target='_blank' rel="noreferrer">
                <h2>Ver todos os projetos</h2>
            </a>
        </div>
    )
}

export default Projetos
