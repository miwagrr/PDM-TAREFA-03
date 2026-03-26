import React, { useState } from 'react';
import { FilmeBusiness } from '../business/filmeBusiness';

const business = new FilmeBusiness();

export function UseFilmesViewModel() {
  const [filmes, setFilmes] = useState(business.listar());
  const [erro, setErro] = useState(null);
  const [tituloInput, setTituloInput] = useState("");

  function recarregar() {
    setFilmes(business.listar());
  }

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

  function removerFilme(id) {
    business.removerFilme(id);
    setFilmes(business.listar());
  }

  return {
    filmes,
    erro,
    tituloInput,
    setTituloInput,
    adicionarFilme,
    removerFilme,
    recarregar,
  };
}
