import * as React from 'react';
import Navbar from "../../utils/Navbar";
import './Estudiante.scss';

export default function Estudiante(){

  const indiceTrimestral = 3.7;
  const indiceGeneral = 3.2;
  const asigaturasCursadas = '30/96';
  const creditosCursados = '78/260';
  const trimestresCursados = '11/14';
  const idEstudiante = 1091234;
  const vCarrera = 'Ingeniería de Software';

   return(
    <div className="App">

    <Navbar />

    <div className="content">

      <article className="article">
        <h2>Índice trimestral</h2>  
        <p>{ indiceTrimestral }</p>
      </article> 

      <article className="article">
        <h2>Índice general</h2>
        <p>{ indiceGeneral }</p>
      </article>
      
      <article className="article">
        <h2>Asignaturas cursadas</h2>
        <p>{ asigaturasCursadas }</p>
      </article> 

      <article className="article">
        <h2>Créditos cursados</h2>
        <p>{ creditosCursados }</p>
      </article> 
      
      <article className="article">
        <h2>Trimestres cursados</h2>
        <p>{ trimestresCursados }</p>
      </article> 

     </div>

    <div className="sidebar">

      <svg>
        <rect width="130" height="140" x="20" fill="white" stroke="black"/>
      </svg>

      <img src="C:\Users\tonga\Desktop\FotoPrueba.jpg" alt="Foto del estudiante"/>

      <aside>

        <article className="article">
          <h2>Matrícula</h2>
          <p>{ idEstudiante }</p>
        </article> 
      
        <article className="article">
          <h2>Carrera</h2>
          <p>{ vCarrera }</p>
        </article> 

      </aside>

    </div>

  </div>
   );
}
