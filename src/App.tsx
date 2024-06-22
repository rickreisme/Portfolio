import './assets/styles/global.scss'
import Contato from './components/Contato.tsx'
import Experiencia from './components/Experiencia.tsx'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Intro from './components/Intro.tsx'
import Projetos from './components/Projetos.tsx'
import Sobre from './components/Sobre.tsx'

function App() {

  return (
    <>
      <div className="page-container" >
        <Header />

        <main>
          <Intro />
          <Sobre />
          <Experiencia />
          <Projetos />
          <Contato/>
          <Footer/>
        </main>
      </div>
    </>
  )
}

export default App