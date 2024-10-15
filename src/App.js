import logo from './logo.svg';
import './App.css';
import Cabecalho from './Componentes/Cabecalho/Cabecalho.js';
import Rodape from './Componentes/Rodape/Rodape.js';
import Jogos from './Componentes/Jogos/Jogos.js';
import Formulario from './Componentes/Formulario/Formulario.js';
import { useState,useEffect } from 'react';
import FormInput from './Componentes/FormInput/FormInput.js';
import Botao from './Componentes/Botao/Botao.js';

function App() {
  

     const [jogos,setJogos] = useState([]);
    
    
     const [formCampos, setFormCampos] = useState({
       Nome: "",
       Nota: 0,
       Imagem: ""
     });

     const [formCampoNota,setFormNota] = useState({ id:0,Nota:0})
 
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

       function handleCampoNota(event){
          setFormNota({...formCampoNota,[event.target.name]: event.target.value});
       }
       
       const handleClikNota = async () =>{
          
          const response = await fetch(`http://localhost:3005/jogos/${formCampoNota.id}`,
            {
              method:'PATCH',
              headers:new Headers({
                "Content-Type":"application/json"
              }),
              body:JSON.stringify(formCampoNota)
            })

 
         alert('Nota atualizada sucesso');
         
         getJogos();
        
         setFormNota({Nota:0});

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

       


       const handleClickEliminar = async (id) =>{
        const respone = await fetch (`http://localhost:3005/jogos/${id}`,{
            method:"DELETE",
            headers: new Headers({
                 "Content-Type":"application/json"
            })
        })
        
        alert("Jogo eliminado com sucesso")
      
        getJogos();
      } 

  return (
    <>
      <Cabecalho />
      <div className='Conteudo'>
      <section className='form-contato'> 
        <h2>Cadastre novo jogo</h2>
        <Formulario div1={false} div2={true} handleCampos={handleCampos} jogos={jogos} formCampos={formCampos} handleClick={handleClick} />
      </section>
        <Jogos jogos={jogos} handleClick={handleClickEliminar}/>
        <br />
        <section className='form-contato'>
          <h2>Altere a nota dos jogos</h2>
         <Formulario div1={true} div2={false} handleCampos={handleCampoNota} 
          formCampos={formCampoNota} handleClick={handleClikNota} jogos={jogos} />
        </section>
      </div>
      <Rodape />
    </>
  );
}

export default App;
