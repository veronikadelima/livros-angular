import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LivroListaComponent,
    LivroDadosComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrigido para styleUrls (no plural)
})

export class AppComponent {
  title = 'livros-angular';
}