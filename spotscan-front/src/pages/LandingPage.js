import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Tu apoyo en el diagnóstico temprano de melanomas</h1>
          <p>Utilizando técnicas de machine learning y redes neuronales, SpotScan se presenta como una herramienta complementaria al trabajo de dermatólogos y médicos especializados en cáncer de piel, al permitir realizar un análisis automático de imagen y predecir con un alto grado de certeza la probabilidad de que una foto dada de una mancha pueda ser un melanoma.</p>
          <Link to="/prueba">
            <button type="button" className="btn btn-primary">Prueba nuestro servicio</button>
          </Link>
        </div>
        <div className="col">
          <img style={{marginTop: "10px"}} src="https://www.actonmedical.com/wp-content/uploads/2021/02/slider-bg-scaled.jpeg" width="600px"></img>
        </div>
      </div>
    </>
  )
}