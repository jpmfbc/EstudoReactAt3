import logo from './logo.svg';
import './App.css';
import Cabecalho from './Componentes/Cabecalho/Cabecalho.js';
import Rodape from './Componentes/Rodape/Rodape.js';
import Jogos from './Componentes/Jogos/Jogos.js';
import Formulario from './Componentes/Formulario/Formulario.js';
function App() {
  const jogos = [
    {
       Nome:"Mario",
       Nota:9,
       Imagem:"https://m.media-amazon.com/images/I/813JPZr+pCL._AC_UY218_.jpg" 
    },
    {
        Nome:"Chrono Trigger",
        Nota:10,
        Imagem:"https://m.media-amazon.com/images/I/51RRfBwQAoL._AC_UY218_.jpg" 
     },
     {
        Nome:"Dragon Age",
        Nota:9,
        Imagem:"https://m.media-amazon.com/images/I/61X7vDugswL._AC_UY218_.jpg" 
     },
     {
        Nome:"Devil May Cry",
        Nota:8,
        Imagem:"https://m.media-amazon.com/images/I/71eaiCcevRS._AC_UY218_.jpg" 
     }]

  return (
    <>
      <Cabecalho />
      <div className='Conteudo'>
      <Jogos jogos={jogos} />
      <section className='form-contato'> 
        <h2>De sua nota para o jogo</h2>
        <Formulario jogos={jogos} />
      </section>
      </div>
      <Rodape />
    </>
  );
}

export default App;
