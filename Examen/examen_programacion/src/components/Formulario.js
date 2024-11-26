// src/App.js
import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { saveStudentData } from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    rut: '',
    correo: '',
    telefono: '',
    carrera: '',
    sede: '',
  });

  const [validator] = useState(new SimpleReactValidator());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validator.allValid()) {
      setIsSubmitting(true);
      await saveStudentData(formData);
      setIsSubmitting(false);
      alert('Datos guardados exitosamente');
    } else {
      validator.showMessages();
      // Para forzar el renderizado del mensaje de error
      setFormData({ ...formData });
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Formulario de Registro de Alumno</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre Alumno</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {validator.message('nombre', formData.nombre, 'required', {
            className: 'text-danger',
          })}
        </div>

        <div className="mb-3">
          <label className="form-label">Edad</label>
          <input
            type="number"
            className="form-control"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
          />
          {validator.message('edad', formData.edad, 'required|numeric', {
            className: 'text-danger',
          })}
        </div>

        <div className="mb-3">
          <label className="form-label">RUT</label>
          <input
            type="text"
            className="form-control"
            name="rut"
            value={formData.rut}
            onChange={handleChange}
          />
          {validator.message('rut', formData.rut, 'required', {
            className: 'text-danger',
          })}
        </div>

        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input
            type="email"
            className="form-control"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
          {validator.message('correo', formData.correo, 'required|email', {
            className: 'text-danger',
          })}
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="text"
            className="form-control"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
          {validator.message('telefono', formData.telefono, 'required|numeric', {
            className: 'text-danger',
          })}
        </div>

        <div className="mb-3">
          <label className="form-label">Carrera</label>
          <input
            type="text"
            className="form-control"
            name="carrera"
            value={formData.carrera}
            onChange={handleChange}
          />
          {validator.message('carrera', formData.carrera, 'required', {
            className: 'text-danger',
          })}
        </div>

        <div className="mb-3">
          <label className="form-label">Sede</label>
          <input
            type="text"
            className="form-control"
            name="sede"
            value={formData.sede}
            onChange={handleChange}
          />
          {validator.message('sede', formData.sede, 'required', {
            className: 'text-danger',
          })}
        </div>

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Guardando estudiante...' : 'Registrar Estudiante'}
        </button>
      </form>
    </div>
  );
}

export default App;
