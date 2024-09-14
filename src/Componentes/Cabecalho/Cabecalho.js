import "./Cabecalho.css";
import Menssagem from "../Menssagem/Menssagem";

const Cabecalho = () =>{
    return(
        <header className="cabecalho">
            <h1>Galeria de jogos</h1>
            <Menssagem  nome="João Paulo"/>
        </header>
    )
}

export default Cabecalho