import "./Formulario.css"

const Formulario = ({...props}) =>{
    return(
        <form className="form">
           <div className="form-input">
                <label>Jogo</label>
                <select>
                {
                    props.jogos.map((jogo) =>
                    (
                        <option>{jogo.Nome}</option>
                    ))
                } 
                </select>
           </div>
           <div className="form-input"> 
                <label>Nota</label>
                <input  type="number" min="1" max="10" step="1" />
           </div>
        </form>
    )
}

export default Formulario;