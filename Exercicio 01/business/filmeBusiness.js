import { Filme } from '../models/filmeModel';

let filmes: Filme[] = []; 
let proxId = 1;

export class FilmeBusiness {
  
  listar(): Filme[] {
    return [...filmes];
  }

  addFilme(titulo: string, lista: Filme[]): Filme | null {
    if (!titulo) {
      throw new Error("Nome é obrigatório");
    }
    
    if (titulo.length <= 2) {
      throw new Error("O título deve ter mais de 2 caracteres");
    }

    const jaExiste = lista.find(f => f.titulo.toLowerCase() === titulo.toLowerCase());

    if (jaExiste) {
      throw new Error("O filme já está em sua WatchList");
    }

    const novo: Filme = { 
      id: proxId++, 
      titulo: titulo 
    };

    filmes.push(novo);
    return novo; 
  }
}
