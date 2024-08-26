import "../../assets/styles/intro-sobre.scss"
import imgIntro from "../../assets/Imagens/rick-sobre3.png"

const IntroEnglish = () => {
    return (
        <div className='intro' id='intro'>
            <div className='saudacao'>
                <h1>Rick Reis</h1>
                <p>Developer</p>
                <h5>React | PostgreSQL | TypeScript | Node.js | Flutter</h5>
            </div>

            <div className='imagem-intro'>
                <img src={imgIntro}></img>
            </div>
        </div>
    )
}

export default IntroEnglish