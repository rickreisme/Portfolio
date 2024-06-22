import './assets/styles/global.scss'
import ContatoEnglish from './components/english/ContatoEnglish..tsx'
import ExperienciaEnglish from './components/english/ExperienciaEnglish.tsx'
import FooterEnglish from './components/english/FooterEnglish.tsx'
import HeaderEnglish from './components/english/HeaderEnglish.tsx'
import IntroEnglish from './components/english/IntroEnglish.tsx'
import ProjetosEnglish from './components/english/ProjetosEnglish.tsx'
import SobreEnglish from './components/english/SobreEnglish.tsx'

function AppEnglish() {

  return (
    <>
      <div className="page-container" >
        <HeaderEnglish />

        <main>
          <IntroEnglish />
          <SobreEnglish />
          <ExperienciaEnglish/>
          <ProjetosEnglish />
          <ContatoEnglish/>
          <FooterEnglish/>
        </main>
      </div>
    </>
  )
}

export default AppEnglish