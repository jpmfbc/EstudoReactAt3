import "./Jogo.css"
import "../Botao/Botao.js"
import Botao from "../Botao/Botao.js";

const Jogo = ({...props}) =>{
    return(
        <li className="filme-item">
            <img src={props.imagem}></img>
            <p>Nome:{props.nome} </p>
            <p>Nota: {props.nota}</p>
            <p>
                <Botao 
                    texto="Eliminar" 
                    tipo="button" 
                    onClick={() => props.handleClick(props.id)}
                />
            </p>
        </li>
    )
}

export default Jogo;