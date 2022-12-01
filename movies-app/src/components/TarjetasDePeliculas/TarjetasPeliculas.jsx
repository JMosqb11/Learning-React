import React from 'react';
import './TarjetasPeliculas.css'

const TarjetasPeliculas = ({id,url,name}) => {
  return (

    <div className='tarjeta' key={id}>
       <img className="portada" src={url} alt={name} />
       <h2 className='tituloPeliculas'>{name}</h2>
    </div>
  )
}

export default TarjetasPeliculas