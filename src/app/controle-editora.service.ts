import { Injectable } from '@angular/core';
import { Editora } from './editora';


@Injectable({
  providedIn: 'root'
})

// Controle responsável por algumas rotinas relacionadas a Editoras
export class ControleEditoraService {
  //Cria um atributo editoras com três elementos. 
  private editoras: Array<Editora> = [
    {codEditora: 1, nome: 'Editora_1'},
    {codEditora: 2, nome: 'Editora_2'},
    {codEditora: 3, nome: 'Editora_3'},
  ]
  constructor() { }

  //Busca e disponibiliza a lista de editoras
  getEditoras(): Array<Editora> {
    return [...this.editoras];
  }

  //Busca uma editora pelo seu código e retorna o seu nome.
  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.filter(editora => editora.codEditora === codEditora);
    return editora.length > 0 ? editora[0].nome : undefined;
  }
}
