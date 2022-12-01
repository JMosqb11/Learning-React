import React from "react";
import TarjetasPeliculas from "../TarjetasDePeliculas/TarjetasPeliculas";
import "./Peliculas.css";

const Peliculas = () => {
  return (
    <div className="contenedor-peliculas">
      <TarjetasPeliculas
        url="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jPzW61WlkyHVdvm8dCQZveTvmgW.jpg"
        name="Anatomia de Grey"
      />
      <TarjetasPeliculas
        url="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eCvGVqmxXcNvLMJxLAJeBZ2cUnM.jpg"
        name="The good Doctor"
      />
      <TarjetasPeliculas
        url="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2wsoNhgOrKgPNhPqLi8YEg72CvB.jpg"
        name="Todo en un viernes(Friday)"
      />
    </div>
  );
};

export default Peliculas;
