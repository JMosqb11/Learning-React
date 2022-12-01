import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './tabla.css';


const Tabla = () => {

    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
    };


    useEffect(() => {
      fetchCharacters();
    }, []);


    
  return (
    <table id='users'>
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Status</th>
                <th>species</th>
                <th>gender</th>
                <th>Image</th>
                
            </tr>
        </thead>
        <tbody>
            {characters.map((character) => (
                <tr key={character.id}>
                    <td>{character.id}</td>
                    <td>{character.name}</td>
                    <td>{character.status}</td>
                    <td>{character.species}</td> 
                    <td>{character.gender}</td>
                    <td>
                        <img src={character.image} alt="" />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Tabla