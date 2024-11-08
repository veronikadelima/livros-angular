import { Routes } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

export const routes: Routes = [
  { path: '', redirectTo: '/lista', pathMatch: 'full' }, // Redireciona para a lista de livros na raiz
  { path: 'lista', component: LivroListaComponent }, // Rota para a lista de livros
  { path: 'dados', component: LivroDadosComponent }, // Rota para adicionar um novo livro 
  { path: '**', redirectTo: '/lista' }, // Redireciona rotas não encontradas para a lista de livros
];
