import "./Botao.css"

const Botao = ({onClick,...props}) => {
    return(
        <button className="botao" type={props.tipo} onClick={(event)=>{
            event.preventDefault();    
            onClick();
        }}>{props.texto}  </button>
    )
}

export default Botao;