import "../assets/styles/experiencia-projetos.scss"

import spotify from "../assets/Imagens/spotify.png"
import mvc from "../assets/Imagens/contactmvc.png"
import gerenciador from "../assets/Imagens/gerenciador.png"

const Projetos = () => {
    return (
        <div className='meus-projetos' id='meus-projetos'>
            <h2 id="projeto-titulo">&#123;rickreisme&#47;<span>projetos</span>&#125;</h2>
            <h3>Confira aqui os meus projetos mais recentes</h3>

            <div className='projetos' id='projetos'>
                <div className='box-projeto'>
                    <h2 className="nome-projeto">GerenciadorSenhas</h2>
                    <div className="img-projeto">
                        <img src={gerenciador} className='img_projeto'></img>
                    </div>
                    <p>Uma aplicação web que permite o cadastro, geração e o gerenciamento de senhas, notas e favoritos.
                    </p>
                    <div className='botoes'>
                        <a className='btn3R' href='https://github.com/rickreisme/GerenciadorSenhas' target='_blank' rel="noreferrer">
                            <h2>Ver repositório</h2>
                        </a>
                    </div>
                    <h4>Vite React - Python - SASS - Javascript - Docker - PostgreSQL</h4>
                </div>

                <div className='box-projeto'>
                    <h2 className="nome-projeto">ContactMVC</h2>
                    <div className="img-projeto">
                        <img src={mvc} className='img_projeto'></img>
                    </div>
                    <p>Uma aplicação web que implementa operações CRUD em um sistema de contatos ligado com um banco de dados em
                        Docker.
                    </p>
                    <div className='botoes'>
                        <a className='btn3R' href='https://github.com/rickreisme/ContactMVC' target='_blank' rel="noreferrer">
                            <h2>Ver repositório</h2>
                        </a>
                    </div>
                    <h4>ASP.NET - HTML - CSS - Javascript - Docker - PostgreSQL</h4>
                </div>

                <div className='box-projeto'>
                    <h2 className="nome-projeto">Spotify Clone</h2>
                    <div className="img-projeto">
                        <img src={spotify} className='img_projeto'></img>
                    </div>
                    <p>Recriação da landing page do Spotify Web. Faz uma consulta em uma api, buscando os artistas
                        digitados na barra de pesquisa.</p>
                    <div className='botoes'>
                        <a className='btn3' href='https://github.com/rickreisme/SpotifyClone' target='_blank' rel="noreferrer">
                            <h2>Ver repositório</h2>
                        </a>
                        <a className='btn4' href='https://rickreisme.github.io/SpotifyClone/' target='_blank' rel="noreferrer">
                            <h2>Acessar página</h2>
                        </a>
                    </div>
                    <h4>HTML - CSS - Javascript - Node.js - Json-Server</h4>
                </div>

            </div>

            <a className='btn5' href='https://github.com/rickreisme?tab=repositories' target='_blank' rel="noreferrer">
                <h2>Ver todos os projetos</h2>
            </a>
        </div>
    )
}

export default Projetos
