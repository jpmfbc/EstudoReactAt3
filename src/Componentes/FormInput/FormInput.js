import "./FormInput.css";

const FormInput = ({ onChange, value, ...props }) => {
    return (
      <div className="form-input">
        <label htmlFor={props.id}>{props.texto}:</label>
        <input
          type={props.tipo}
          id={props.id}
          value={value}
          name={props.id}  // Use o mesmo 'name' do estado
          onChange={onChange} // Quando o input muda, chamamos onChange
          {...props}
        />
      </div>
    );
  };
  

export default FormInput;