
import React from 'react';
import './App.css';

import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import FotoPerfil from './img/indio.jpg';

function App() {
  return (
    <div className="App">
      <h2>Dados pessoais</h2>
      <div className="page-section-container">
        <CardGrande 
          imagem={FotoPerfil} 
          nome="Indio Medeiros" 
          descricao="Oi, eu sou o Índio Medeiros. Sou Artista da Dança, licenciado, bacharelando e pós-graduando em Dança na UFBA. Desenvolvedor Web e mestre Reiki Usui Shiki Ryoho. Um polímata apaixonado pelas artes, aprendizagem, saúde e tecnologia."
        />
        
        {/* <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        /> */}
        <CardPequeno
          imagem="https://www.flaticon.com/svg/static/icons/svg/725/725636.svg"
          nome="E-mail:"
          texto="bboyindio@gmail"
        />
        <CardPequeno
          imagem="https://www.flaticon.com/svg/static/icons/svg/1239/1239525.svg"
          nome="Endereço:"
          texto="Rua da alegria, próximo a Labenu"
        />
      </div>

      <h2>Experiências profissionais</h2>
      <div className="page-section-container">
        
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/2535/2535504.svg" 
          nome="Desenvolvedor Web Full Stack" 
          descricao="Formado pela Labenu_ com mais de 1000h de código" 
        />
      </div>
      <div className="page-section-container">  
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/895/895571.svg" 
          nome="Artista da Dança" 
          descricao="Licenciado, bacharel e especialista de Dança pela UFBA.  " 
        />
      </div>
      <div className="page-section-container">
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/2978/2978688.svg" 
          nome="Mestre em Reiki" 
          descricao="Nivel III-A em Reiki pela ReikiBR" 
        />
      </div>

      <h2>Formação Acadêmica</h2>
      <div className="page-section-container">
          
        <CardGrande 
          imagem="https://www.flaticon.com/svg/static/icons/svg/895/895571.svg" 
          nome="Artista da Dança" 
          descricao="Licenciado, bacharel e especialista de Dança pela UFBA.  " 
        />
      </div>

      <div className="page-section-sociais">
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
