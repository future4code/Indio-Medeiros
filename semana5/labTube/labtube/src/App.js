import React from 'react';
import logo from './logo.svg';
import lupa from './lupa.png';
import inicio from './img/inicio.svg';
import historico from './img/historico.png'
import inscricoes from './img/inscricoes.svg'
import emalta from './img/em-alta.svg'
import originais from './img/originais.svg'
import camera from './img/camera.svg'
import perfil from './img/perfil.svg'
import sino from './img/sino.png'
import menu from './img/menu.svg'
import './App.css';

function App() {
  const titulo = "Título do Vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div className="App">
     <div className="tela-inteira">
        <header>
            
            <h1>Lab Tube</h1>
            <div>
              <input type="text" placeholder="Pesquisa" id="campoDeBusca" />
              <input type="image" src={lupa}/>
            </div>
            <div>
              <img src={camera}/>
              <img src={menu}/>
              <img src={sino}/>
              <img src={perfil}/>
            </div>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    
                    <li className="botoes-meunu-vertical"><img src={inicio}/>Início</li>
                    <li className="botoes-meunu-vertical"><img src={emalta}/>Em alta</li>
                    <li className="botoes-meunu-vertical"><img src={inscricoes}/>Inscrições</li>
                    <hr />
                    <li className="botoes-meunu-vertical"><img src={originais}/>Originais</li>
                    <li className="botoes-meunu-vertical"><img src={historico}/>Histórico</li>
                </ul>
            </nav>
            
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
    </div>
  );
}

export default App;
