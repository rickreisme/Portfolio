import "../assets/styles/intro-sobre.scss"
import imgIntro from "../assets/Imagens/rick-sobre1.jpeg"

const Intro = () => {
    return (
        <div className='intro' id='intro'>
            <div className='saudacao'>
                <h1>Rick Reis</h1>
                <p>Desenvolvedor</p>
                <h5>React.js | TypeScript | Node.js | PostgreSQL</h5>
            </div>

            <div className='imagem-intro'>
                <img src={imgIntro}></img>
            </div>
        </div>
    )
}

export default Intro