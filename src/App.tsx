import "./assets/styles/global.scss";
import Contato from "./sessions/Contato.tsx";
import Experiencia from "./sessions/Experiencia.tsx";
import Footer from "./sessions/Footer.tsx";
import Header from "./sessions/Header.tsx";
import Intro from "./sessions/Intro.tsx";
import Projetos from "./sessions/Projetos.tsx";
import Sobre from "./sessions/Sobre.tsx";

function App() {
  return (
    <>
      <div className="page-container">
        <Header />

        <main>
          <Intro />
          <Sobre />
          <Experiencia />
          <Projetos />
          <Contato />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
