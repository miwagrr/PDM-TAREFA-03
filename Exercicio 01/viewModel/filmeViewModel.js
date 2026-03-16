import React, { useState } from 'react';
import { FilmeBusiness } from '../business/filmeBusiness';

const business = new FilmeBusiness();

export function useFilmesViewModel() {
  const [filmes, setFilmes] = useState(business.listar());
  const [erro, setErro] = useState(null);
  const [tituloInput, setTituloInput] = useState("");

  function adicionarFilme() {
    try {
      business.addFilme(tituloInput, filmes);
      setFilmes(business.listar());
      setErro(null);
      setTituloInput("");
    } catch (e) {
      setErro(e.message);
    }
  }

  return {
    filmes,
    erro,
    tituloInput,
    setTituloInput,
    adicionarFilme,
  };
}
