import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'p.darvas'}
          fotoUsuario={'https://instagram.fssa2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/17076713_1435568096741678_6427123086188871680_a.jpg?_nc_ht=instagram.fssa2-1.fna.fbcdn.net&_nc_ohc=DlBNm9i1sCkAX9EH9II&oh=5e1501491cb749d137ddcad9325486fd&oe=5FB12280'}
          fotoPost={'https://instagram.fssa2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/120822384_159952962444014_4179226705688461706_n.jpg?_nc_ht=instagram.fssa2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=PpyPJo2NSkgAX8zHwTn&_nc_tp=24&oh=028c47d09ed8f48cd034476d7cfb2e77&oe=5FB1E064'}
        />
        <Post
          nomeUsuario={'indio.medeiros'}
          fotoUsuario={'https://instagram.fssa2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/118645646_824739891396583_6677954587868063811_n.jpg?_nc_ht=instagram.fssa2-1.fna.fbcdn.net&_nc_ohc=w4OJSQOcef0AX8psXg1&oh=2da24f063baa5a67c4ad0731dca57e1f&oe=5FB06EE8'}
          fotoPost={'https://instagram.fssa2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116042061_618535805437613_8901282056969694683_n.jpg?_nc_ht=instagram.fssa2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=2xnj0agcg8gAX-RKS0w&_nc_tp=24&oh=e9deacde00fc123638fa42b7bb65c43c&oe=5FB2BB45'}
        />
        <Post
          nomeUsuario={'caiotexeiraa'}
          fotoUsuario={'https://instagram.fssa2-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/80712123_486889855558041_8778992719372011699_n.jpg?_nc_ht=instagram.fssa2-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=DyfK9gqb-tcAX8DUiKR&_nc_tp=25&oh=666462a304f8a7988159ab85c11af2b0&oe=5FB03019'}
          fotoPost={'https://instagram.fssa2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/117639810_1928318287291853_282122540702824052_n.jpg?_nc_ht=instagram.fssa2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=NjN-sYVAwVAAX-f8gBd&_nc_tp=25&oh=d7f11e6a2de63efd43906e95c520843e&oe=5FB085DE '}
        />
      </div>
    );
  }
}

export default App;
