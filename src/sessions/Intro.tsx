import "../assets/styles/intro-sobre.scss"
import imgIntro from "../assets/imagens/rick-sobre3.png"

const Intro = () => {
    return (
        <div className='intro' id='intro'>
            <div className='saudacao'>
                <h1>Rick Reis</h1>
                <p>Desenvolvedor</p>
                <h5>React | TypeScript | Node.js | PostgreSQL</h5>
            </div>

            <div className='imagem-intro'>
                <img src={imgIntro}></img>
            </div>
        </div>
    )
}

export default Intro