import { Component } from '@angular/core';
/*Para reconhecer *ngFor foi necessário importar o CommonModule
para que o comando fosse reconhecido*/
import { CommonModule } from '@angular/common';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  // Importação do modulo CommonModule
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})

export class LivroListaComponent {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditoras: ControleEditoraService,
    private servLivros: ControleLivrosService
  ){};

  ngOnInit(): void {
    this.editoras = this.servEditoras.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }

  obterNome = (codEditora: number): string | undefined => {
    return this.servEditoras.getNomeEditora(codEditora);
  }

}
