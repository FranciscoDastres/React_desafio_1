//App,jsx
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header titulo="Adopta Un Perrito"/>
      <main className="galeria">
        <MyCard
          image="src/assets/img/perrito1.jpg"
          name="Bartolo"
          desc="Lleno de energía y listo para jugar.¡Dale a Bartolo el lugar amoroso que se merece!"
          tag="Mestizo"
          colorTag="red"
        />
        <MyCard
          image="src/assets/img/perrito2.jpg"
          name="Príncipe"
          desc="Un perrito muy fiel y buen acompañante hasta en los dias mas helados el esta contigo"
          tag="Mestizo"
          colorTag="badge-secondary"
        />
        <MyCard
          image="src/assets/img/perrito3.jpg"
          name="Foxy"
          desc="tiene mucho amor para dar y es muy obediente, se porta muy bien y le encanta jugar"
          tag="Mestizo"
          colorTag="badge-primary"
        />
        <MyCard
          image="src/assets/img/perrito4.jpg"
          name="Pepa"
          desc="esta en recuperacion y busca un nuevo hogar que la quiera mucho como se merece"
          tag="Mestizo"
          colorTag="badge-warning"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;