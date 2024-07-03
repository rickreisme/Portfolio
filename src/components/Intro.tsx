import "../assets/styles/intro-sobre.scss"
import imgIntro from "../assets/Imagens/rick-sobre.jpeg"

const Intro = () => {
    return (
        <div className='intro' id='intro'>
            <div className='saudacao'>
                <h1>Olá, eu sou <span>Rick Reis</span>!</h1>
                <h2>Desenvolvedor Full-Stack</h2>
            </div>

            <div className='imagem-intro'>
                <img src={imgIntro}></img>
            </div>
        </div>
    )
}

export default Intro
