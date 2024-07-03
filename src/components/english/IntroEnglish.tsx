import "../../assets/styles/intro-sobre.scss"
import imgIntro from "../../assets/Imagens/rick-sobre.jpeg"

const IntroEnglish = () => {
    return (
        <div className='intro' id='intro'>
            <div className='saudacao'>
                <h1>Hello, I'm <span>Rick Reis</span>!</h1>
                <h2>Developer</h2>
            </div>

            <div className='imagem-intro'>
                <img src={imgIntro}></img>
            </div>
        </div>
    )
}

export default IntroEnglish