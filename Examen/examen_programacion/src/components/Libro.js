// src/components/Libro.js
import React from 'react';

class Libro extends React.Component {
  render() {
    const { libro, agregarAlCarrito } = this.props; // Recibimos los props
    return (
      <div>
        <h3>{libro.titulo}</h3>
        <p>Autor: {libro.autor}</p>
        <p>Precio: ${libro.precio}</p>
        <button onClick={() => agregarAlCarrito(libro)}>
          Agregar al carrito
        </button>
      </div>
    );
  }
}

export default Libro;
