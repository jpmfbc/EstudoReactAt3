import "./Jogos.css";
import Jogo from "../Jogo/Jogo";



const Jogos = ({...props}) => {
    
    return (
        <section className="jogos">
            <h2>Jogos Da Galeria</h2>
            <ul className="jogos-lista">
            {
                props.jogos.map((jogo) =>
                (
                    <Jogo 
                    nome={jogo.Nome} 
                    nota={jogo.Nota} 
                    imagem={jogo.Imagem} 
                    handleClick={props.handleClick}
                    id={jogo.id}
                      />
                ))
            } 
            </ul>
        </section>
    )
}

export default Jogos;