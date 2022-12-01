import React, { useState } from "react";
import axios from "axios";
import "./FormNews.css";

const FormNews = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const submitData = async (e) => {
    e.preventDefault();
    alert('Hola')
    const addNew = {
      title: title,
      date: date,
      image: image,
      author: author,
      description: description,
    };

    let bodyContent = JSON.stringify(addNew);

    let reqOptions = {
      url: "https://crudcrud.com/api/f545a4d47b6c48a480b84f906c2d6aea/News",
      method: "POST",
      data: bodyContent,
    };
    let response = await axios.request(reqOptions);
    console.log(response.data);

    setAuthor("");
    setDate("");
    setDescription("");
    setImage("");
    setTitle("");
  };

  return (
    <form onSubmit={submitData}>
      <input
        type="text"
        required
        placeholder="Titulo"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="date"
        required
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />
      <input
        type="text"
        required
        placeholder="url imagen"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        required
        placeholder="author"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />
      <textarea
        row="30"
        cols="50"
        type="text"
        required
        placeholder="Escribe la noticia"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default FormNews;
