import "../../assets/styles/experiencia-projetos.scss"

import imc from "../../assets/Imagens/imc.png"
import spotify from "../../assets/Imagens/spotify.png"
import mvc from "../../assets/Imagens/contactmvc.png"

const ProjetosEnglish = () => {
    return (
        <div className='meus-projetos' id='meus-projetos'>
            <h2 id="projeto-titulo">&#123;rickreisme&#47;<span>projects</span>&#125;</h2>
            <h3>Check out my most recent projects</h3>

            <div className='projetos' id='projetos'>
                <div className='box-projeto'>
                    <h2 className="nome-projeto">ContactMVC</h2>
                    <img src={mvc} className='img_projeto'></img>
                    <p>
                        A web application that implements CRUD operations on a contact system connected to a Docker container database.
                    </p>
                    <div className='botoes'>
                        <a className='btn3R' href='https://github.com/rickreisme/ContactMVC' target='_blank' rel="noreferrer">
                            <h2>See repository</h2>
                        </a>
                    </div>
                    <h4>ASP.NET - HTML - CSS - Javascript - Docker - PostgreSQL</h4>
                </div>

                <div className='box-projeto'>
                    <h2 className="nome-projeto">Spotify Clone</h2>
                    <img src={spotify} className='img_projeto'></img>
                    <p>
                        Recreation of the Spotify Web landing page. It makes a query in an api,
                        searching for the artists typed in the search bar.
                    </p>
                    <div className='botoes'>
                        <a className='btn3' href='https://github.com/rickreisme/SpotifyClone' target='_blank' rel="noreferrer">
                            <h2>See repository</h2>
                        </a>
                        <a className='btn4' href='https://rickreisme.github.io/SpotifyClone/' target='_blank' rel="noreferrer">
                            <h2>Go to page</h2>
                        </a>
                    </div>
                    <h4>HTML - CSS - Javascript - Node.js - Json-Server</h4>
                </div>

                <div className='box-projeto' id="box-projeto1">
                    <h2 className="nome-projeto">CalculaIMC</h2>
                    <img src={imc} className='img_projeto'></img>
                    <p>
                        Website that calculates BMI according to weight and height provided by the user and returns the
                        weight range in which it is located
                    </p>
                    <div className='botoes'>
                        <a className='btn3' href='https://github.com/rickreisme/CalculaIMC' target='_blank' rel="noreferrer">
                            <h2>See repository</h2>
                        </a>
                        <a className='btn4' href='https://rickreisme.github.io/CalculaIMC/' target='_blank' rel="noreferrer">
                            <h2>Go to page</h2>
                        </a>
                    </div>
                    <h4>HTML - CSS - Javascript</h4>
                </div>

            </div>

            <a className='btn5' href='https://github.com/rickreisme?tab=repositories' target='_blank' rel="noreferrer">
                <h2>See all the projects</h2>
            </a>
        </div>
    )
}

export default ProjetosEnglish