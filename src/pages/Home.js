import React from "react";
import "./css/Home.css";
import { Button } from "react-bootstrap";
import Particles from "react-particles-js";
import photo from "../img/pic1.jpg";

export default function Home() {
  return (
    <div>
      <div className="main-app">
        <div className="main-container">
          <div className="main-text">
            Hola, soy <span>Felipe</span>. <br />
            Soy un desarrollador Full-Stack.
          </div>
          <Particles
            id="particles-js"
            params={{
              particles: {
                number: {
                  value: 120,
                  density: {
                    enable: true,
                    value_area: 1500,
                  },
                },
                color: {
                  value: "#ffffff",
                },
                shape: {
                  stroke: {
                    width: 2,
                    color: "#ffffff",
                  },
                },
                line_linked: {
                  enable: true,
                  color: "#000000",
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
              },
            }}
          />
        </div>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-11 col-lg-5 box">
              <div className="box-content">
                <div className="row">
                  <h4>Desarrollo Freelance</h4>
                  <p>
                    Desde automatizar procesos hasta la creación de un MVP para
                    una aplicación web.
                  </p>
                </div>
                <div className="row btn-container">
                  <Button variant="light" className="home-button">
                    Inicia tu proyecto
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-11 col-lg-5 box">
              <div className="box-content">
                <div className="row">
                  <h4>Asesoria para tu e-commerce</h4>
                  <p>
                    Crear tu presencia online y gestionar tu tienda con los
                    mejores resultados.
                  </p>
                </div>
                <div className="row btn-container">
                  <Button variant="light" className="home-button margin-set">
                    Aprende mas
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 profile-box">
              <img src={photo} alt="profile" className="profile-img" />
            </div>
            <div className="col-lg-4">
              <div className="about-holder">
                <h2 className="about-title">ABOUT</h2>
                <p className="about-text">
                  Hola, mi nombre es Felipe, soy desarrollador de software y
                  creador de contenido. Actualmente trabajo para Globant y
                  desempeño el rol de desarrollador Node.js. En mi tiempo libre
                  me gusta trabajar como freelancer e invertir en criptomonedas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
