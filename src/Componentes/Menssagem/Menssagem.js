import "./Menssagem.css";

const Menssagem = ({nome="Usuário"}) =>{
    return (
        <h3 className="textoMsg">Bem vindo {nome}</h3>
    )
}

export default Menssagem;