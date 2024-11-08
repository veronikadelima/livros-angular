import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';


@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importar módulos necessários
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'] // Corrigido para "styleUrls"
})

export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro(0, 0, '', '', []); // Inicializando o livro
  public autoresForm: string = ''; // Variável temporária para autores como string
  public editoras: Array<Editora> = [];

  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;
  private router: Router;

  constructor(servEditora: ControleEditoraService, servLivros: ControleLivrosService, router: Router) {
    this.servEditora = servEditora;
    this.servLivros = servLivros;
    this.router = router;
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir() {
    // Aqui você converte a string de autores em um array usando split
    this.livro.codEditora = +this.livro.codEditora;  // Converte a string para número
    this.livro.autores = this.autoresForm.split('\n'); // Divide a string em um array de autores
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }
}