import React from "react";
import { Button } from "react-bootstrap";
import "./css/Services.css";

export default function Services() {
  return (
    <div>
      <div className="container">
        <div className="services">
          <div className="col-12 col-lg-12">
            <h3>Reserva tu mentoria</h3>
          </div>
          <div className="col-11 col-lg-12 services-box">
            <div className="box-content">
              <div className="row">
                <p>
                  Iniciar tu carrera como programador puede llegar a ser
                  complicado, desde elegir qué lenguaje aprender hasta en qué
                  herramientas especializarse. Lo se debido a que ya pase por
                  esos mismos obstáculos. Así que si estás iniciando en este
                  campo o simplemente estás buscando apoyo o un guía, puedo
                  ayudarte.
                </p>
              </div>
              <div className="row button-container">
                <Button variant="light" style={{ border: "2px solid black" }}>
                  Enviar Email
                </Button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-12">
            <h3>Desarrollo de tu proyecto</h3>
          </div>
          <div className="col-11 col-lg-12 services-box">
            <div className="box-content">
              <div className="row">
                <p>
                  Escribo código que hace la diferencia. Desde automatizar
                  procesos, crear web-scrapers, hasta la creación del MVP para
                  tu proyecto. Disfruto de crear proyectos con propósito. Envía
                  un correo desde el siguiente botón para iniciar la consulta de
                  tu proyecto.
                </p>
              </div>
              <div className="row button-container">
                <Button variant="light" style={{ border: "2px solid black" }}>
                  Enviar Email
                </Button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-12">
            <h3>Asesoria para tu e-commerce</h3>
          </div>
          <div className="col-11 col-lg-12 services-box">
            <div className="box-content">
              <div className="row">
                <p>Creacion y asesoria para tu e-commerce.</p>
              </div>
              <div className="row button-container">
                <Button variant="light" style={{ border: "2px solid black" }}>
                  Enviar Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
