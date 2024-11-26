// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaDeLibros from './components/ListaDeLibros';
import Formulario from './components/Formulario'; // Importamos el componente Formulario
import Autenticacion from './components/Autenticacion';
function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Comprar libros para IPLACEX</h1>

      {/* Mostrar la lista de libros */}
      <ListaDeLibros />

      {/* Mostrar el formulario de registro de estudiante */}
      <Formulario />

      <Autenticacion/>

      {/* Separador entre los formularios */}
      <hr className="my-4" />

      
    </div>

    


  );
}

export default App;
