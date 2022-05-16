import React, { useState } from 'react';
import "./ServicePage.css";
import Skeleton from '@mui/material/Skeleton';

const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/uniandes201922278/image/upload";
const MODEL_API = "http://localhost:8000/predict";
const data = new FormData();

export const ServicePage = () => {
  const [ image, setImage ] = useState("");
  const [ sent, setSent ] = useState(false);
  const [ url, setUrl ] = useState("");
  const [ prob, setProb ] = useState(null);

  const uploadImage = () => {
    data.append("file", image);
    data.append("upload_preset", "spotscan");
    data.append("cloud_name", "uniandes201922278");
    fetch(CLOUDINARY_API, {
      method: "POST",
      body: data
    })
    .then(resp => {
      console.log("FOTO SUBIDA");
      return resp.json();
    })
    .then(async data => {
      setUrl(data.url);
      setSent(true);
      let body = {
        image: data.url
      };
      console.log("SE VA A PEDIR PROB")
      const resp = await fetch(MODEL_API, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(body)
      });
      const data_1 = await resp.json();
      console.log("PROB RECIBIDA");
      return setProb(data_1);
      }
    )
  }
  
  /* const sendToAPI = async () => {
    let b = {image: image};
    const resp = await fetch(MODEL_API, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(b)
    });
    const data = await resp.json();
    setProb(data);
  } */

  return (
    <>
      <div className="row">
        <div className='col'>
          <h1>Prueba nuestro servicio</h1>
          <p>Carga una foto de la mancha a analizar. Usa imágenes de dimensiones 224x224 y en formato .jpg para que se ajusten de mejor manera al modelo.</p>
          <h2>Selecciona una imagen</h2>
          {/* <input type={"text"} onChange={(e) => setImage(e.target.value)} />
          <button className="btn btn-success" onClick={sendToAPI} disabled={image ? false : true}>Subir</button>
          <p>{prob ? "Prob: " + console.log(prob) : "Waiting"}</p> */}
          <div>
            <input type="file" accept='image/*' onChange={(e)=> setImage(e.target.files[0])}></input>
            <button className="btn btn-success" onClick={uploadImage} disabled={image ? false : true}>Subir</button>
          </div>
          {image ? ( 
            <>
              <img src={URL.createObjectURL(image)} width="200px" id="img-selected"/>
              <figcaption>Imagen seleccionada</figcaption>
            </>
          ) : <></>
          }
          {sent && !prob ? (
            <div style={{paddingLeft: "20%", paddingRight: "20%"}}>
              <Skeleton variant="text" />
              <Skeleton variant="rectangular" height={50} />
              <Skeleton variant="text" />
              <Skeleton variant="rectangular" height={50} />
            </div>
          ) : <></>
          }
          {sent && prob ? (
            <div>
              <h2>Resultados</h2>
              <p>El paciente tiene probabilidad de {prob.probability} de sufrir de melanoma.</p>
            </div>
          ) : <></>
          }
        </div>
      </div>
    </>
  );
}