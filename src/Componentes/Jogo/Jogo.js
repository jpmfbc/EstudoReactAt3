import "./Jogo.css"

const Jogo = ({...props}) =>{
    return(
        <li className="filme-item">
            <img src={props.imagem}></img>
            <p>Nome:{props.nome} </p>
            <p>Nota: {props.nota}</p>
        </li>
    )
}

export default Jogo;