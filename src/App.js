import logo from './logo.svg';
import './App.css';
import Cabecalho from './Componentes/Cabecalho/Cabecalho.js';
import Rodape from './Componentes/Rodape/Rodape.js';
import Jogos from './Componentes/Jogos/Jogos.js';
import Formulario from './Componentes/Formulario/Formulario.js';
import { useState,useEffect } from 'react';
function App() {
  

     const [jogos,setJogos] = useState([]);
    
    
     const [formCampos, setFormCampos] = useState({
       Nome: "",
       Nota: 0,
       Imagem: ""
     });
 
     useEffect(()=>{
      getJogos()
     },[]);
     
     
       // Função para lidar com mudanças nos campos do formulário
       function handleCampos(event) {
         setFormCampos({
           ...formCampos,            // Mantenha os outros campos
           [event.target.name]: event.target.value  // Atualize o campo que mudou
         });
       }
     
       const handleClick = async () => {
        const response = await fetch('http://localhost:3005/jogos',{
           method:'POST',
           headers: new Headers({
             "Content-type":"application/json"
           }),
           body: JSON.stringify(formCampos)
         })
 
         const data= await response.json();
 
         alert(`jogo ${data.Nome} cadastradro com sucesso`)
         
         getJogos();
         
        setFormCampos({
          Nome: "",
          Nota: 0,
          Imagem: ""
        })
           
       }
 
       const getJogos = async () =>{
         var response = await fetch('http://localhost:3005/jogos');
         var data= await response.json()
        setJogos(data);
         
       }
 

  return (
    <>
      <Cabecalho />
      <div className='Conteudo'>
      <section className='form-contato'> 
        <h2>Cadastre novo jogo</h2>
        <Formulario handleCampos={handleCampos} formCampos={formCampos} handleClick={handleClick} />
      </section>
      <Jogos jogos={jogos} />
      </div>
      <Rodape />
    </>
  );
}

export default App;
