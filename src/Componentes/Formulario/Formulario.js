import "./Formulario.css"
import Botao from '../Botao/Botao.js'
import FormInput from '../FormInput/FormInput.js'

const Formulario = ({...props}) =>{
    
    return(
    <>
    <div  hidden={props.div1}> 
      <form className="form">
      <FormInput
        texto="Nome"
        id="Nome"
        tipo="text"
        value={props.formCampos.Nome}  // Estado controlado para o nome
        onChange={props.handleCampos}  // Atualiza o estado quando o valor mudar
      />
      <FormInput
        texto="Nota"
        id="Nota"
        tipo="number"
        value={props.formCampos.Nota}   // Estado controlado para o ano
        onChange={props.handleCampos}  // Atualiza o estado quando o valor mudar
      />
      <FormInput
        texto="Imagem"
        id="Imagem"
        tipo="text"
        value={props.formCampos.Imagem}  // Estado controlado para o poster
        onChange={props.handleCampos}    // Atualiza o estado quando o valor mudar
      />
     <Botao texto="Enviar" tipo="submit" onClick={props.handleClick} />
     </form>
     </div>
    <div hidden={props.div2}>
      <form className="form">
          <div className="form-input">
            <label>Jogo:</label>
            <select id="id"
            value={props.formCampos.id}
            name="id" 
            onChange={props.handleCampos}>
            {
              props.jogos.map((jogo) =>(
                <option key={jogo.id} value={jogo.id}>{jogo.Nome}</option>
              ))
            }
          </select>
          </div>
          <FormInput
            texto="Nota"
            id="Nota"
            tipo="number"
            value={props.formCampos.Nota}   // Estado controlado para o ano
            onChange={props.handleCampos}  // Atualiza o estado quando o valor mudar
          />
          <Botao texto="Alterar Nota" tipo="submit" onClick={props.handleClick} />
    </form>
    </div>
    </>
    )
}

export default Formulario;