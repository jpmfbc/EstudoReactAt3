import "./Formulario.css"
import Botao from '../Botao/Botao.js'
import FormInput from '../FormInput/FormInput.js'

const Formulario = ({...props}) =>{
    
    return(
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
    )
}

export default Formulario;