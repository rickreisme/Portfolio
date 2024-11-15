import { FaPaintBrush } from "react-icons/fa";
import { LuLayout } from "react-icons/lu";
import { DiScrum } from "react-icons/di";

const OutrasHabilidades = () => {
    return (
        <div className="diferenciais">
            <div className="card">
                <div className="card-body">
                    <FaPaintBrush className="card-icon" />

                    <div className="card-titulo">
                        <h3>Noções de design</h3>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <LuLayout className="card-icon" />

                    <div className="card-titulo">
                        <h3>Noções de UI/UX</h3>
                    </div>
                </div>
            </div>
            
            <div className="card">
                <div className="card-body">
                    <DiScrum className="card-icon" />

                    <div className="card-titulo">
                        <h3>Metodologia Scrum</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutrasHabilidades;
