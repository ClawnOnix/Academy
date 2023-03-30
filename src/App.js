import React from "react";
import * as Rutas from "./pages/";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Routes>
          <Route path="/" element = {<Rutas.Login />}></Route>
          <Route path="/admin" element = {<Rutas.Admin />}></Route>
          <Route path="/estudiante" element = {<Rutas.Estudiante />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
