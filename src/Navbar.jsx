import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/registro-tecnico">Registro Técnico</Link> {/* Enlace para el registro de técnicos */}
        </li>
        <li>
          <Link to="/administrar-tareas">Administrar Tareas</Link> {/* Enlace para administrar tareas */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
