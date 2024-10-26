import "./assets/styles/global.scss";
// import { Helmet } from "react-helmet-async";
import ContatoEnglish from "./sessions/english/ContatoEnglish..tsx";
import ExperienciaEnglish from "./sessions/english/HabilidadesEnglish.tsx";
import FooterEnglish from "./sessions/english/FooterEnglish.tsx";
import HeaderEnglish from "./sessions/english/HeaderEnglish.tsx";
import IntroEnglish from "./sessions/english/IntroEnglish.tsx";
import ProjetosEnglish from "./sessions/english/ProjetosEnglish.tsx";
import SobreEnglish from "./sessions/english/SobreEnglish.tsx";

function AppEnglish() {
    return (
        <>
            {/* <Helmet>
                <title>Rick Reis | Developer </title>
            </Helmet> */}
            <div className="page-container">
                <HeaderEnglish />

                <main>
                    <IntroEnglish />
                    <SobreEnglish />
                    <ExperienciaEnglish />
                    <ProjetosEnglish />
                    <ContatoEnglish />
                    <FooterEnglish />
                </main>
            </div>
        </>
    );
}

export default AppEnglish;
