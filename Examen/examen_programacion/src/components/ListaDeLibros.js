// src/components/ListaDeLibros.js
import React, { Component } from 'react';
import Libro from './Libro'; // Importamos el componente Hijo
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener Bootstrap importado

class ListaDeLibros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      libros: [
        { id: 1, titulo: 'Programacion 1', autor: 'IPLACEX', precio: 20000 },
        { id: 2, titulo: 'Programacion 2', autor: 'IPLACEX', precio: 25000 },
        { id: 3, titulo: 'Programacion 3', autor: 'IPLACEX', precio: 10000 }
      ],
      carrito: [] // Inicializamos el carrito vacío
    };
  }

  agregarAlCarrito = (libro) => {
    this.setState((prevState) => ({
      carrito: [...prevState.carrito, libro]
    }));
  };

  render() {
    return (
      <div className="container mt-4">
        <h1 className="text-center mb-4">Lista de Libros</h1>
        
        <div className="row">
          {this.state.libros.map((libro) => (
            <div key={libro.id} className="col-md-4 mb-4">
              <Libro
                libro={libro}
                agregarAlCarrito={this.agregarAlCarrito} // Enviamos la función al Hijo
              />
            </div>
          ))}
        </div>

        <div className="mt-5">
          <h2>Carrito de Compras</h2>
          <ul className="list-group">
            {this.state.carrito.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.titulo} de {item.autor} - ${item.precio}
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <h4>Total: ${this.state.carrito.reduce((total, item) => total + item.precio, 0)}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ListaDeLibros;
