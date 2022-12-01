import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
       <Link to="/Personajes">Personajes</Link> 
        <Link to="/Formulario">Formulario</Link>
    </nav>
  )
}

export default Header