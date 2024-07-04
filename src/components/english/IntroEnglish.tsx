import "../../assets/styles/intro-sobre.scss"
import imgIntro from "../../assets/Imagens/rick-sobre.jpeg"

const IntroEnglish = () => {
    return (
        <div className='intro' id='intro'>
            <div className='saudacao'>
                <h1>Hello, I'm <span>Rick Reis</span>!</h1>
                <p>Developer</p>
                <h5>React.js | PostgreSQL | Flutter | ASP.NET Core</h5>
            </div>

            <div className='imagem-intro'>
                <img src={imgIntro}></img>
            </div>
        </div>
    )
}

export default IntroEnglish