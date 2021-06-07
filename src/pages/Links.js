import React from "react";
import "./css/Links.css";

export default function Links() {
  return (
    <div className="links-container">
      <div className="container">
        <h1 className="links-title">Hola, soy Felipe.</h1>
        <p className="links-subtitle">
          Desarrollador full-stack y creador de contenido. Trabajo en Globant
          como desarrollador Node.js
        </p>
        <div className="row">
          <div className="col-sm link-box">
            <h1>✉️</h1>
            <p>Contacto</p>
          </div>
          <div className="col-sm link-box">
            <h1>👨‍💻</h1>
            <p>Servicios</p>
          </div>
          <div className="col-sm link-box">
            <h1>🤝</h1>
            <p>Mentoria</p>
          </div>
          <div className="col-sm link-box">
            <h1>☕</h1>
            <p>Invitame un cafe</p>
          </div>
        </div>
      </div>
    </div>
  );
}
