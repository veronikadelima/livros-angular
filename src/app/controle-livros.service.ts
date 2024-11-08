import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})

// Controle responsável por algumas rotinas relacionadas a Livros
export class ControleLivrosService {
  // Cria uma base de dados fake para teste 
  private livros: Array<Livro> = [
    {codigo: 1, codEditora:3, titulo: 'Um titulo qualquer 1', resumo: 'Um resumo muito importante 1', autores:['Glauber Mascaranha', 'Edgar Mascaranha', 'Delgat Mascaranha']},
    {codigo: 2, codEditora:1, titulo: 'Um titulo qualquer 2', resumo: 'Um resumo muito importante 2', autores:['Francisco Muller', 'Raysa Muller']},
    {codigo: 3, codEditora:2, titulo: 'Um titulo qualquer 3', resumo: 'Um resumo muito importante 3', autores:['Rita Belchior', 'Rute Belchior']},
  ];

  constructor() { }
  // Função que busca e disponibiliza a lista de livros.
  obterLivros() {
    return this.livros;
  }

  // Função para inclusão de um novo livro
  incluir(novoLivro: Livro): void {
    const maiorCodigo = this.livros.length > 0 ? Math.max(...this.livros.map(livro => livro.codigo)) : 0;
    novoLivro.codigo = maiorCodigo + 1;
    this.livros.push(novoLivro);
  }

  // Função para localizar um livro pelo código e excluí-lo.
  excluir(codigo: number): void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);
    /* Aqui alterei o > para >= para poder excluir o primeiro item da lista */ 
    if (indice >= 0) {
      this.livros.splice(indice, 1);
    }
  }

}
